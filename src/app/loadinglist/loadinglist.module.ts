import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadinglistPageRoutingModule } from './loadinglist-routing.module';

import { LoadinglistPage } from './loadinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadinglistPageRoutingModule
  ],
  declarations: [LoadinglistPage]
})
export class LoadinglistPageModule {}
