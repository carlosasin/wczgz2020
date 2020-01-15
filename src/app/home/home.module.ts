import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiModule } from '../api/api.module';
import { PostsModule } from '../posts/posts.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { routes } from './home.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), PostsModule, ApiModule],
  declarations: [HomeLayoutComponent],
  exports: [HomeLayoutComponent]
})
export class HomeModule {}
