import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxFixedFooterDirective } from 'ngx-fixed-footer';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { LanguageService } from 'src/app/shared/services/language.service';
import { VERSION } from 'src/environments/version';

@Component({
  selector: 'app-layout-public',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    LocalizeRouterModule,
    MatButtonModule,
    TranslateModule,
    NgxFixedFooterDirective,
  ],
  templateUrl: './layout-public.component.html',
  styleUrl: './layout-public.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPublicComponent {
  language = inject(LanguageService);

  public endYear = new Date(VERSION.date).getFullYear();
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;
}
