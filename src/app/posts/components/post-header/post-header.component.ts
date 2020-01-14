import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostDto } from '../../../api/dtos/post.dto';
import { Dates } from '../../../utilities/dates';
import { Urls } from '../../../utilities/urls';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostHeaderComponent {
  @Input() post: PostDto;

  getUrl(link: string): string {
    return new Urls().getPath(link);
  }

  getDate(dateString: string): string {
    return new Dates().parse(dateString);
  }
}
