import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../models/casa';

@Component({
  selector: 'app-casa-detalle',
  templateUrl: './casa-detalle.component.html',
  styleUrls: ['./casa-detalle.component.scss']
})
export class CasaDetalleComponent implements OnInit {
  
  //@Input('casa') casa : Casa;
  casa : Casa;

  constructor() {
    this.casa = new Casa;
  }

  ngOnInit() {
  }

}
