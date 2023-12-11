import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { from } from 'rxjs';
import { ROUTE_DEFINITION } from '../shared/constants/route-definition.constant';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule, MatInputModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private lr: LocalizeRouterService,
    private auth: Auth,
  ) {}

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    from(
      signInWithEmailAndPassword(this.auth, this.form.controls.email.value, this.form.controls.password.value),
    ).subscribe((res) => {
      console.log(res);
      const translatedRoute = this.lr.translateRoute(`/${ROUTE_DEFINITION.APP.POSTS}`);
      this.router.navigate([translatedRoute]);
    });
  }
}
