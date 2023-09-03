import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, getDocs, limit, orderBy, query } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const postsRef = collection(this.firestore, 'posts');
    const queryRef = query(postsRef, orderBy('title', 'desc'), limit(2));

    from(getDocs(postsRef)).subscribe((res) => console.log(res.size));

    from(getDocs(queryRef))
      .pipe(
        map((res) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const arr: any[] = [];
          res.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());

            arr.push({ id: doc.id, ...doc.data() });
          });

          return arr;
        }),
      )
      .subscribe((res) => {
        console.log(res);
      });

    this.item$ = collectionData(postsRef);
  }
}
