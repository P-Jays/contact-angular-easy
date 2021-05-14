import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadinglistPage } from './loadinglist.page';

const routes: Routes = [
  {
    path: '',
    component: LoadinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadinglistPageRoutingModule {}
