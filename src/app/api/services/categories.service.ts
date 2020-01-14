import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CategoryDto } from '../dtos/category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly http: HttpClient) {}

  getCategories(): Observable<CategoryDto[]> {
    return this.http
      .get<CategoryDto[]>(`${environment.apiUrl}wp/v2/categories`)
      .pipe(catchError(error => throwError(error)));
  }

  getCategory(id: number): Observable<CategoryDto> {
    return this.http
      .get<CategoryDto>(`${environment.apiUrl}wp/v2/categories/${id}`)
      .pipe(catchError(error => throwError(error)));
  }
}
