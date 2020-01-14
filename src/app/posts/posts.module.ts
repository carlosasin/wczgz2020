import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiModule } from '../api/api.module';
import { PostBodyComponent } from './components/post-body/post-body.component';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { PostLayoutComponent } from './components/post-layout/post-layout.component';
import { PostNavigationComponent } from './components/post-navigation/post-navigation.component';
import { PostsResolver } from './posts.resolver';

@NgModule({
  imports: [CommonModule, RouterModule, ApiModule],
  providers: [PostsResolver],
  declarations: [
    PostLayoutComponent,
    PostHeaderComponent,
    PostBodyComponent,
    PostNavigationComponent,
  ],
  exports: [PostLayoutComponent],
  entryComponents: [PostLayoutComponent],
})
export class PostsModule {}
