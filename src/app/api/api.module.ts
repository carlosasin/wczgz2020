import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { PathsService } from './services/paths.service';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [CommonModule],
  providers: [PostsService, CategoriesService, PathsService, UsersService],
  exports: []
})
export class ApiModule {}
