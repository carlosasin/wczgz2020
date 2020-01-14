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
  exports: [SkeletonComponent]
})
export class CoreModule {}
