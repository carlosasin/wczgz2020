import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostDto } from '../../../api/dtos/post.dto';

@Component({
  selector: 'app-post-list-layout',
  templateUrl: './post-list-layout.component.html',
  styleUrls: ['./post-list-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListLayoutComponent {
  @Input() post: PostDto = null;
}
