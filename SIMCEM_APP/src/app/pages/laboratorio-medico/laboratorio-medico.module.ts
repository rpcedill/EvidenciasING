import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioMedicoPageRoutingModule } from './laboratorio-medico-routing.module';

import { LaboratorioMedicoPage } from './laboratorio-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioMedicoPageRoutingModule
  ],
  declarations: [LaboratorioMedicoPage]
})
export class LaboratorioMedicoPageModule {}
