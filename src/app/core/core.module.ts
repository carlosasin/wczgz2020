import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiModule } from '../api/api.module';
import { AsideComponent } from './components/aside/aside.component';
import { CategoriesComponent } from './components/aside/components/categories/categories.component';
import { RecentEntriesComponent } from './components/aside/components/recent-entries/recent-entries.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

// export function initPaths(pathsService: PathsService) {
//   return (): Promise<any> => {
//     return pathsService.init();
//   };
// }

@NgModule({
  imports: [CommonModule, RouterModule, ApiModule],
  declarations: [
    SkeletonComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    RecentEntriesComponent,
    CategoriesComponent
  ],
  // providers: [
  //   HttpClient,
  //   Router,
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: initPages,
  //     deps: [HttpClient],
  //     multi: true
  //   }
  // ],
  exports: [SkeletonComponent]
})
export class CoreModule {}

// export function initPages(router: Router, http: HttpClient) {
//   return () =>
//     new Promise(resolve => {
//       return http
//         .get<Paths>(`${environment.apiUrl}pages/v3/wordcamp`)
//         .pipe(catchError(error => throwError(error)))
//         .subscribe((paths: Paths) => {
//           paths.posts.forEach((path: string) => {
//             router.config.unshift({
//               path,
//               component: PostLayoutComponent
//             });
//           });
//           resolve(true);
//         });
//     });
// }
