import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';
import { ROUTE_DEFINITION } from '../shared/constants/route-definition.constant';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  public form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router,
    private lr: LocalizeRouterService,
  ) {}

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    from(
      createUserWithEmailAndPassword(this.auth, this.form.controls.email.value, this.form.controls.password.value),
    ).subscribe((res) => {
      console.log(res);
      const translatedRoute = this.lr.translateRoute(`/${ROUTE_DEFINITION.APP.POSTS}`);
      this.router.navigate([translatedRoute]);
    });
  }
}
