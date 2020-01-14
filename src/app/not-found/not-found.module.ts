import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found.component';
import { routes } from './not-found.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
