import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorioMedicoPage } from './laboratorio-medico.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioMedicoPageRoutingModule {}
