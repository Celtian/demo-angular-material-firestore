import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent {}
