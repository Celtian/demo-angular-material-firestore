import { Portal, PortalModule } from '@angular/cdk/portal';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Auth, signOut } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxFixedFooterDirective } from 'ngx-fixed-footer';
import { Observable, from } from 'rxjs';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { VERSION } from 'src/environments/version';

@Component({
  selector: 'app-layout-private',
  imports: [
    AsyncPipe,
    LocalizeRouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    PortalModule,
    RouterLink,
    RouterOutlet,
    TranslateModule,
    NgxFixedFooterDirective,
  ],
  templateUrl: './layout-private.component.html',
  styleUrl: './layout-private.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPrivateComponent implements OnInit {
  private breadcrumbsPortalService = inject(BreadcrumbsPortalService);
  language = inject(LanguageService);
  private auth = inject(Auth);
  private router = inject(Router);
  private lr = inject(LocalizeRouterService);

  public endYear = new Date(VERSION.date).getFullYear();
  public breadcrumbsPortal$!: Observable<Portal<unknown>>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.language.initLang();
  }

  public ngOnInit(): void {
    queueMicrotask(() => {
      this.breadcrumbsPortal$ = this.breadcrumbsPortalService.portal$;
    });
  }

  public logout(): void {
    from(signOut(this.auth))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        const translatedRoute = this.lr.translateRoute(`/${ROUTE_DEFINITION.APP.LOGIN}`);
        this.router.navigate([translatedRoute]);
      });
  }
}
