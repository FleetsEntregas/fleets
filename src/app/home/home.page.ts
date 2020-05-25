import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public titulo: string;
  dash = true;
  
  constructor(private activatedRoute: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit() {
    this.dash = true;
    this.servicesService.alteracaoPag.subscribe(r => {
      this.titulo = r;
    })

    this.servicesService.dash.subscribe(r => {
      this.dash = r;
    })
  }

  voltar(){
    this.servicesService.voltar.emit();
  }

}
