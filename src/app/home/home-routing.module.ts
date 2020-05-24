import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { InicioComponent } from './inicio/inicio.component';
import { SolicitacaoTransporteComponent } from './solicitacao-transporte/solicitacao-transporte.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'prefix' },
      { path: 'inicio', component: InicioComponent},
      { path: 'solicitacao-transporte', component: SolicitacaoTransporteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
