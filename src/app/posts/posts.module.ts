import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '../api/api.module';
import { PostLayoutComponent } from './components/post-layout/post-layout.component';

@NgModule({
  imports: [CommonModule, ApiModule],
  declarations: [PostLayoutComponent],
  exports: [PostLayoutComponent]
})
export class PostsModule {}
