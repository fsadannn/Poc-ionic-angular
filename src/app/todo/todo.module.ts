import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TODOPageRoutingModule } from './todo-routing.module';

import { TODOPage } from './todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TODOPageRoutingModule
  ],
  declarations: [TODOPage]
})
export class TODOPageModule {}
