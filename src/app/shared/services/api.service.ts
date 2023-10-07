import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs, limit, orderBy, query } from '@angular/fire/firestore';
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
    sort: keyof PostDto = 'id',
    order: 'asc' | 'desc' = 'asc',
    q = '',
  ): Observable<Pagination<PostDto>> {
    console.log(pageIndex, sort, order, q);

    const postsRef = collection(this.firestore, 'posts');
    const queryRef = query(postsRef, orderBy('title', 'desc'), limit(pageSize));

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
