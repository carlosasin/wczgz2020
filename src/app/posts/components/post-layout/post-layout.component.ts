import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostLayoutComponent {}
