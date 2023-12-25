import { PortalModule } from '@angular/cdk/portal';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxAppVersionDirective } from 'ngx-app-version';
import { SeoDirective } from './shared/directives/seo.directive';

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
  hostDirectives: [NgxAppVersionDirective, SeoDirective],
})
export class AppComponent {}
