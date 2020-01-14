import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostDto } from '../../../api/dtos/post.dto';
import { Urls } from '../../../utilities/urls';

@Component({
  selector: 'app-post-navigation',
  templateUrl: './post-navigation.component.html',
  styleUrls: ['./post-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostNavigationComponent {
  @Input() post: PostDto;

  getUrl(link: string): string {
    return new Urls().getPath(link);
  }
}
