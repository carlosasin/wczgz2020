import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PostDto } from '../dtos/post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly http: HttpClient) {}

  getLastPosts(limit = 5): Observable<PostDto[]> {
    return this.http
      .get<PostDto[]>(`${environment.apiUrl}wp/v2/posts/?page_size=${limit}`)
      .pipe(catchError(error => throwError(error)));
  }
}
