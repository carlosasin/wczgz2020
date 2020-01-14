import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostDto } from '../../../api/dtos/post.dto';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostBodyComponent {
  @Input() post: PostDto;
}
