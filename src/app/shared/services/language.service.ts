import { Injectable, signal, DOCUMENT, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, LOCALES } from '../constants/language.constant';
import { Language } from '../dto/language.dto';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private doc = inject<Document>(DOCUMENT);
  private lr = inject(LocalizeRouterService);
  private translate = inject(TranslateService);
  private meta = inject(Meta);

  public language = signal<Language>(DEFAULT_LANGUAGE);
  public language$ = toObservable(this.language);

  public initLang(): void {
    this.setLang(this.translate.currentLang as Language);
  }

  public setLang(language: Language): void {
    this.lr.changeLanguage(language, { replaceUrl: true }, true);
    this.setHtmlLang(language);
    this.setOgTags(language);
    this.language.set(language);
  }

  public toggleLanguage(): void {
    this.setLang(this.language() === 'en' ? 'cs' : 'en');
  }

  private setHtmlLang(language: string): void {
    if (this?.doc?.documentElement) {
      this.doc.documentElement.lang = language;
    }
  }

  private setOgTags(language: Language): void {
    this.meta.removeTag(`content='${this.formatLang(language)}'`);
    this.meta.updateTag({ property: 'og:locale', content: this.formatLang(language) });
    this.meta.addTags(
      AVAILABLE_LANGUAGES.filter((lang) => lang !== language).map((lang) => ({
        property: 'og:locale:alternate',
        content: this.formatLang(lang),
      })),
    );
  }

  private formatLang(language: Language): string {
    return LOCALES[language];
  }
}
