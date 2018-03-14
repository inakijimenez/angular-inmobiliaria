import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../models/casa';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-casa-detalle',
  templateUrl: './casa-detalle.component.html',
  styleUrls: ['./casa-detalle.component.scss']
})
export class CasaDetalleComponent implements OnInit {

  @Input('casa') casa : Casa;
  
  constructor() {
    console.log('CasaDetalleComponent constructor');
  }

  ngOnInit() {
    console.log('CasaDetalleComponent ngOnInit');
  }

}
