import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Paths } from '../dtos/paths.dto';

@Injectable()
export class PathsService {
  constructor(
    private readonly http: HttpClient
  ) {}

  getPaths(): Observable<Paths> {
    return this.http
      .get<Paths>(`${environment.apiUrl}pages/v3/wordcamp`)
      .pipe(catchError(error => throwError(error)));
  }
}
