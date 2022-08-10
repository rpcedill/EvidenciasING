import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenMedicoPage } from './examen-medico.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenMedicoPageRoutingModule {}
