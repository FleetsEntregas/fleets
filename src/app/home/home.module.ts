import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolicitacaoTransporteComponent } from './solicitacao-transporte/solicitacao-transporte.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicesService } from '../services/services.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    InicioComponent,
    SolicitacaoTransporteComponent
  ],
  providers: [
    ServicesService
  ]
})
export class HomePageModule {}
