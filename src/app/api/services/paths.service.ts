import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Paths } from '../dtos/paths.dto';

@Injectable()
export class PathsService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  // init() {
  //   return this.getPaths().pipe(
  //     map((paths: Paths) =>
  //       paths.posts.forEach((path: string) => {
  //         this.router.config.unshift({
  //           path,
  //           component: PostLayoutComponent
  //         });
  //       })
  //     )
  //   );
  // }

  getPaths(): Observable<Paths> {
    return this.http
      .get<Paths>(`${environment.apiUrl}pages/v3/wordcamp`)
      .pipe(catchError(error => throwError(error)));
  }
}
