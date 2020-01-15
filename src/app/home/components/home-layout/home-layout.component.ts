import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from '../../../api/dtos/post.dto';
import { PostsService } from '../../../api/services/posts.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent implements OnInit {
  posts$: Observable<PostDto[]>;

  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getLastPosts(5, true);
  }
}
