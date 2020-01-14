import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Paths } from './api/dtos/paths.dto';
import { PathsService } from './api/services/paths.service';
import { PostLayoutComponent } from './posts/components/post-layout/post-layout.component';
import { PostsResolver } from './posts/posts.resolver';

@Injectable()
export class AppService {
  constructor(
    private readonly pathsService: PathsService,
    private injector: Injector
  ) {}

  init() {
    return new Promise<void>(resolve => {
      return this.pathsService.getPaths().subscribe((paths: Paths) => {
        const router = this.injector.get(Router);
        paths.posts.forEach((path: string) => {
          router.config.unshift({
            path,
            component: PostLayoutComponent,
            resolve: {
              post: PostsResolver
            }
          });
        });
        resolve();
      });
    });
  }
}
