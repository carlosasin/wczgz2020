import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CategoryDto } from '../dtos/category.dto';
import { PostDto } from '../dtos/post.dto';
import { UserDto } from '../dtos/user.dto';
import { CategoriesService } from './categories.service';
import { UsersService } from './users.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly http: HttpClient,
    private readonly categoriesService: CategoriesService,
    private readonly usersService: UsersService
  ) {}

  getLastPosts(limit = 5): Observable<PostDto[]> {
    return this.http
      .get<PostDto[]>(`${environment.apiUrl}wp/v2/posts/?page_size=${limit}`)
      .pipe(catchError(error => throwError(error)));
  }

  getPostBySlug(slug: string): Observable<PostDto> {
    return this.http
      .get<PostDto[]>(`${environment.apiUrl}wp/v2/posts/?slug=${slug}`)
      .pipe(
        map((posts: PostDto[]) => posts.pop()),
        concatMap((post: PostDto) =>
          forkJoin([
            this.categoriesService.getCategory(post.categories.pop()),
            this.usersService.getUser(post.author)
          ]).pipe(
            map(([category, user]: [CategoryDto, UserDto]) => ({
              ...post,
              category,
              user
            }))
          )
        ),
        catchError(error => throwError(error))
      );
  }
}
