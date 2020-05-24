import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoTransporteService } from '../services/solicitacao-transporte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public titulo: string;
  
  constructor(private activatedRoute: ActivatedRoute, private solicitacaoTransporteService: SolicitacaoTransporteService) { }

  ngOnInit() {
    this.solicitacaoTransporteService.alteracaoPag.subscribe(r => {
      this.titulo = r;
    })
  }

}
