import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.dash.emit(true);        
  }

  solicitacao(){
    this.servicesService.dash.emit(false);
    this.router.navigate(['/solicitacao-transporte']);
  }

}
