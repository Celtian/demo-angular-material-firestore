import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { AuthPipeGenerator, loggedIn } from '@angular/fire/auth-guard';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Observable, map, take } from 'rxjs';

/**
 * @see https://github.com/angular/angularfire/blob/master/src/auth-guard/auth-guard.ts#L16
 */
@Injectable({
  providedIn: 'root',
})
export class CustomAuthGuard {
  constructor(
    private router: Router,
    private lr: LocalizeRouterService,
    private auth: Auth,
  ) {}

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const authPipeFactory = (next.data['authGuardPipe'] as AuthPipeGenerator) || (() => loggedIn);
    return user(this.auth).pipe(
      take(1),
      authPipeFactory(next, state),
      map((can) => {
        if (typeof can === 'boolean') {
          return can;
        } else if (Array.isArray(can)) {
          const translatedRoute = this.lr.translateRoute(can) as string[];
          return this.router.createUrlTree([translatedRoute]);
        } else {
          const translatedRoute = this.lr.translateRoute(can) as string;
          return this.router.parseUrl(translatedRoute);
        }
      }),
    );
  }
}
