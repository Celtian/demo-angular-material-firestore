import { PortalModule } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxAppVersionDirective } from 'ngx-app-version';
import { SeoDirective } from './shared/directives/seo.directive';

@Component({
  selector: 'app-root',
  imports: [LocalizeRouterModule, PortalModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  hostDirectives: [NgxAppVersionDirective, SeoDirective],
})
export class AppComponent {}
