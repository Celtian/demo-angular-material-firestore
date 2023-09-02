import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { NgxAppVersionModule } from 'ngx-app-version';
import { NgxTranslateVersionModule } from 'ngx-translate-version';
import { VERSION } from 'src/environments/version';
import { routes } from './app.routes';

registerLocaleData(localeCs, 'cs-CS');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      MatSnackBarModule,
      MatDialogModule,
      NgxTranslateVersionModule.forRoot(routes, {
        version: VERSION.version,
      }),
      NgxAppVersionModule.forRoot({
        version: VERSION.version,
      }),
    ),
  ],
};
