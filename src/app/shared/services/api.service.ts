import { Injectable, inject } from '@angular/core';
import { Firestore, QueryConstraint, collection, getDocs, limit, orderBy, query, where } from '@angular/fire/firestore';
import { Observable, combineLatest, from, map } from 'rxjs';
import { Pagination } from '../dto/pagination.dto';
import { PostDto } from '../dto/post.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private firestore: Firestore = inject(Firestore);

  public list(
    pageIndex = 1,
    pageSize = 5,
    sort: keyof Omit<PostDto, 'id'> = 'title',
    order: 'asc' | 'desc' = 'asc',
    q = '',
  ): Observable<Pagination<PostDto>> {
    console.log(pageIndex, q);

    const postsRef = collection(this.firestore, 'posts');

    const queryConstrains: QueryConstraint[] = [orderBy(sort, order), limit(pageSize)];

    if (q) {
      queryConstrains.push(where(sort, '>=', q.toLowerCase()), where(sort, '<=', q.toLowerCase() + '\uf8ff'));
    }

    const queryRef = query(postsRef, ...queryConstrains);

    const totalCount$ = from(getDocs(postsRef)).pipe(map((res) => res.size));
    const items$ = from(getDocs(queryRef)).pipe(
      map((res) => {
        const arr: PostDto[] = [];
        res.forEach((doc) => {
          const data = doc.data() as Omit<PostDto, 'id'>;
          arr.push({ id: doc.id, ...data });
        });
        return arr;
      }),
    );

    return combineLatest([totalCount$, items$]).pipe(
      map(([totalCount, items]) => {
        return {
          items,
          totalCount,
        };
      }),
    );
  }
}
