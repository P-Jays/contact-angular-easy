import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewcontactPage } from './addnewcontact.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewcontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewcontactPageRoutingModule {}
