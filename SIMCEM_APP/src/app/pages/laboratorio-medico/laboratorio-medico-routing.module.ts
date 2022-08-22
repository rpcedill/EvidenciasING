import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorioMedicoPage } from './laboratorio-medico.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioMedicoPage
  },
  {
    path: 'nueva-orden',
    loadChildren: () => import('./nueva-orden/nueva-orden.module').then( m => m.NuevaOrdenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioMedicoPageRoutingModule {}
