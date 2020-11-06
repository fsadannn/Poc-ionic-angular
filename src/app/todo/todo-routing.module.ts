import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TODOPage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: TODOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TODOPageRoutingModule {}
