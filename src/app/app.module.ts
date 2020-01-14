import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ApiModule } from './api/api.module';
import { routes } from './app.routes';
import { SkeletonComponent } from './core/components/skeleton/skeleton.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

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
    HomeModule
  ],
  providers: [],
  bootstrap: [SkeletonComponent]
})
export class AppModule {}
