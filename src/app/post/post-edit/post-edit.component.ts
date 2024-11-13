import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, first, switchMap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDeleteDirective } from 'src/app/shared/directives/post-delete.directive';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { CanComponentDeactivate } from 'src/app/shared/guards/can-deactivate-guard.service';
import { getParamId } from 'src/app/shared/rxjs/get-param-id';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from 'src/app/shared/services/custom-confirm-dialog.service';

@Component({
  selector: 'app-post-edit',
  imports: [
    CommonModule,
    LocalizeRouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    PortalModule,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    PostDeleteDirective,
  ],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  private destroyRef = inject(DestroyRef);

  public dataSource = new DataSource<PostDto>(DEFAULT_POST);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

  public form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.min(3)]],
    body: ['', [Validators.required, Validators.min(3)]],
  });

  constructor(
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private cdr: ChangeDetectorRef,
    private confirm: CustomConfirmDialogService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private translate: TranslateService,
    private lr: LocalizeRouterService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  public canDeactivate(): boolean | Observable<boolean> {
    return this.form.pristine || this.confirm.openCustomConfirmDialog(CustomConfirmDialog.UnsavedWork);
  }

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.breadcrumbsPortalService.setPortal(this.portalContent);
      this.cdr.markForCheck();
    });

    this.route.paramMap
      .pipe(
        getParamId(),
        switchMap((id) => this.apiService.detail(id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.patchValue(post);
        },
        error: () => {
          const error = this.translate.instant('error.unexpected-exception');
          this.dataSource.setError(error);
        },
      });
  }

  public onSubmit(): void {
    this.apiService
      .patch(this.dataSource.data().id, this.form.value)
      .pipe(first())
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.reset(post);
          this.snackBar.open(this.translate.instant('response.update.success'), this.translate.instant('uni.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.update.failed'), this.translate.instant('uni.close'));
        },
      });
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset(this.dataSource.data());
  }

  public onDeleted(): void {
    const translatedRoute = this.lr.translateRoute(`/`);
    this.router.navigate([translatedRoute]);
  }
}
