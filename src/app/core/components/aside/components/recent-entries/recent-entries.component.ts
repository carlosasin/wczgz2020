import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from '../../../../../api/dtos/post.dto';
import { PostsService } from '../../../../../api/services/posts.service';
import { Urls } from '../../../../../utilities/urls';

@Component({
  selector: 'app-recent-entries',
  templateUrl: './recent-entries.component.html',
  styleUrls: ['./recent-entries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentEntriesComponent implements OnInit {
  entries$: Observable<PostDto[]>;

  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.entries$ = this.postsService.getLastPosts(5);
  }

  getUrl(link: string): string {
    return new Urls().getPath(link);
  }
}
