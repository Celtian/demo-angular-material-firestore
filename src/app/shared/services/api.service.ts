import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  QueryConstraint,
  addDoc,
  collection,
  doc,
  docData,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable, combineLatest, from, map, switchMap } from 'rxjs';
import { Pagination } from '../dto/pagination.dto';
import { PostDto, PostInputDto } from '../dto/post.dto';

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

  public create(post: PostInputDto): Observable<PostDto> {
    return from(
      addDoc(collection(this.firestore, 'posts'), {
        ...post,
      }),
    ).pipe(
      switchMap((doc) => from(getDoc(doc))),
      map((doc) => {
        const data = doc.data() as Omit<PostDto, 'id'>;
        return { id: doc.id, ...data };
      }),
    );
  }

  public detail(id: string): Observable<PostDto> {
    const ref = doc(this.firestore, `posts/${id}`);
    return docData(ref).pipe(map((res) => ({ id, ...res }) as PostDto));
  }

  public delete(id: string): Observable<void> {
    const ref = doc(this.firestore, `posts/${id}`);
    return from(deleteDoc(ref)).pipe(map(() => undefined));
  }

  public patch(id: string, body: Partial<PostDto>): Observable<PostDto> {
    const ref = doc(this.firestore, `posts/${id}`);
    return from(updateDoc(ref, { ...body })).pipe(switchMap(() => this.detail(id)));
  }
}
