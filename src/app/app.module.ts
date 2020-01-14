import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ApiModule } from './api/api.module';
import { routes } from './app.routes';
import { AppService } from './app.service';
import { SkeletonComponent } from './core/components/skeleton/skeleton.component';
import { CoreModule } from './core/core.module';
import { PostsModule } from './posts/posts.module';

export function initPaths(appService: AppService) {
  return (): Promise<any> => {
    return appService.init();
  };
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      // initialNavigation: 'disabled',
      // scrollPositionRestoration: 'enabled'
    }),

    // App modules
    ApiModule,
    CoreModule,
    PostsModule
  ],
  providers: [
    AppService,
    {
      provide: APP_INITIALIZER,
      useFactory: initPaths,
      deps: [AppService],
      multi: true
    }
  ],
  bootstrap: [SkeletonComponent]
})
export class AppModule {}
