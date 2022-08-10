import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenMedicoPageRoutingModule } from './examen-medico-routing.module';

import { ExamenMedicoPage } from './examen-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenMedicoPageRoutingModule
  ],
  declarations: [ExamenMedicoPage]
})
export class ExamenMedicoPageModule {}
