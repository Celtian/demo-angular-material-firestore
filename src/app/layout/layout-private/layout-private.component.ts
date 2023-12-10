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
import { NgxFixedFooterModule } from 'ngx-fixed-footer';
import { Observable, from } from 'rxjs';
import { DEFAULT_LANGUAGE } from 'src/app/shared/constants/language.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { VERSION } from 'src/environments/version';

@Component({
  selector: 'app-layout-private',
  standalone: true,
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
    NgxFixedFooterModule,
  ],
  templateUrl: './layout-private.component.html',
  styleUrl: './layout-private.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPrivateComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  public endYear = new Date(VERSION.date).getFullYear();
  public breadcrumbsPortal$!: Observable<Portal<unknown>>;
  public lang = DEFAULT_LANGUAGE;

  constructor(
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private language: LanguageService,
    private auth: Auth,
    private router: Router,
    private lr: LocalizeRouterService,
  ) {
    this.language.initLang();
  }

  public ngOnInit(): void {
    queueMicrotask(() => {
      this.breadcrumbsPortal$ = this.breadcrumbsPortalService.portal$;
    });
    this.language.language$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((language) => (this.lang = language));
  }

  public toggleLanguage(): void {
    this.language.setLang(this.lang === 'en' ? 'cs' : 'en');
  }

  public logout(): void {
    from(signOut(this.auth)).subscribe((res) => {
      console.log(res);
      const translatedRoute = this.lr.translateRoute(`/${ROUTE_DEFINITION.APP.LOGIN}`);
      this.router.navigate([translatedRoute]);
    });
  }
}