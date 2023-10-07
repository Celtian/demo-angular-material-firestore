import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { debounceTime, first, map, switchMap } from 'rxjs';
import { ROUTE_DEFINITION } from '../shared/constants/route-definition.constant';
import { PostDto } from '../shared/dto/post.dto';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LocalizeRouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    // PostListDetailComponent,
    RouterModule,
    TranslateModule,
    PortalModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;
  public readonly displayedColumns: string[] = ['id', 'title', 'body'];
  public readonly pageSizeOptions = [5, 10, 25, 100];
  public data = signal<PostDto[]>([]);
  public totalCount = signal(0);
  public query = '';
  private destroyRef = inject(DestroyRef);

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        first(),
        map((paramMap) => paramMap.get('query') || ''),
      )
      .subscribe((query) => {
        this.query = query;
        this.cdr.markForCheck();
      });

    this.route.queryParams
      .pipe(
        debounceTime(500),
        switchMap((params) =>
          this.apiService.list(
            // TODO move to coerce utils
            Number.isNaN(Number(params?.['pageIndex'])) ? 1 : Number(params?.['pageIndex']),
            Number.isNaN(Number(params?.['pageSize'])) ? 5 : Number(params?.['pageSize']),
            // params?.['sortBy'] as keyof PostDto | undefined,
            // params?.['sortDirection'] as 'asc' | 'desc' | undefined,
            // params?.['query'] as string,
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((posts) => {
        this.data.set(posts.items);
        this.totalCount.set(posts.totalCount);
      });

    /*
    const postsRef = collection(this.firestore, 'posts');
    const queryRef = query(postsRef, orderBy('title', 'desc'), limit(5));

    const count$ = from(getDocs(postsRef)).pipe(map((res) => res.size));
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

    combineLatest([count$, items$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([count, items]) => {
        this.totalCount.set(count);
        this.data.set(items);
      });
      */
  }

  public onSortChange(event: Sort): void {
    this.router.navigate([], {
      queryParams: {
        sortBy: event.active,
        sortDirection: event.direction,
        pageIndex: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onPageChange(event: PageEvent): void {
    this.router.navigate([], {
      queryParams: {
        pageIndex: event.pageIndex > 0 ? event.pageIndex : null,
        pageSize: event.pageSize,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onQueryChange(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.router.navigate([], {
      queryParams: {
        query: query ? encodeURIComponent(query) : null,
        pageIndex: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onQueryRemove(): void {
    this.query = '';
    this.router.navigate([], {
      queryParams: {
        query: null,
        pageIndex: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onClear(): void {
    this.query = '';
    this.router.navigate([], {
      queryParams: {
        query: null,
        pageIndex: null,
        pageSize: null,
        sortBy: null,
        sortDirection: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public trackByPostId(index: number, target: PostDto): string {
    return target.id;
  }
}
