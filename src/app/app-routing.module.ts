import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SolicitacaoTransporteComponent } from './solicitacao-transporte/solicitacao-transporte.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/Fleets',
    pathMatch: 'full'
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'solicitacao-transporte', component: SolicitacaoTransporteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
