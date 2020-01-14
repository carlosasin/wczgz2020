import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUser(id: number): Observable<UserDto> {
    return this.http
      .get<UserDto>(`${environment.apiUrl}wp/v2/users/${id}`)
      .pipe(catchError(error => throwError(error)));
  }
}
