import { Portal, PortalModule } from '@angular/cdk/portal';
import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxAppVersionDirective } from 'ngx-app-version';
import { Observable } from 'rxjs';
import { VERSION } from 'src/environments/version';
import { DEFAULT_LANGUAGE } from './shared/constants/language.constant';
import { BreadcrumbsPortalService } from './shared/services/breadcrumbs-portal.service';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  hostDirectives: [NgxAppVersionDirective],
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  public endYear = new Date(VERSION.date).getFullYear();
  public breadcrumbsPortal$!: Observable<Portal<unknown>>;
  public lang = DEFAULT_LANGUAGE;

  constructor(
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private language: LanguageService,
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
}
