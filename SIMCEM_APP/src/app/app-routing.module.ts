import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: './pages/login/login.module',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'consulta-medico',
    loadChildren: () => import('./pages/consulta-medico/consulta-medico.module').then( m => m.ConsultaMedicoPageModule)
  },
  {
    path: 'examen-medico',
    loadChildren: () => import('./pages/examen-medico/examen-medico.module').then( m => m.ExamenMedicoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
