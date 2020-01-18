import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { SkeletonComponent } from './core/components/skeleton/skeleton.component';

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  bootstrap: [SkeletonComponent],
})
export class AppServerModule {}
