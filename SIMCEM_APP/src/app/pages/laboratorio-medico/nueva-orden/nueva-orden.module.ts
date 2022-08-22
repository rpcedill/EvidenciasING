import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaOrdenPageRoutingModule } from './nueva-orden-routing.module';

import { NuevaOrdenPage } from './nueva-orden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaOrdenPageRoutingModule
  ],
  declarations: [NuevaOrdenPage]
})
export class NuevaOrdenPageModule {}
