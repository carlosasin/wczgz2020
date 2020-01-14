import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostDto } from '../api/dtos/post.dto';
import { PostsService } from '../api/services/posts.service';

@Injectable()
export class PostsResolver implements Resolve<PostDto> {
  constructor(
    private readonly router: Router,
    private readonly postsService: PostsService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PostDto> {
    return this.postsService.getPostBySlug(route.url[0].path).pipe(
      catchError(() => {
        this._redirectError();
        return of(null);
      })
    );
  }

  private _redirectError() {
    this.router.navigate(['/noroute'], { skipLocationChange: true });
  }
}
