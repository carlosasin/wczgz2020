import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDto } from '../../../api/dtos/post.dto';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostLayoutComponent {
  post: PostDto = null;

  constructor(private readonly route: ActivatedRoute) {
    this.post = this.route.snapshot.data.post;
  }
}
