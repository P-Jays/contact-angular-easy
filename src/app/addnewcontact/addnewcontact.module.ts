import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewcontactPageRoutingModule } from './addnewcontact-routing.module';

import { AddnewcontactPage } from './addnewcontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewcontactPageRoutingModule
  ],
  declarations: [AddnewcontactPage]
})
export class AddnewcontactPageModule {}
