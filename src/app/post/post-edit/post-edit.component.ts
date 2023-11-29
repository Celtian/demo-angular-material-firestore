import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostEditComponent {}
