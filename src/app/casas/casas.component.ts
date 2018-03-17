import { Component, OnInit } from '@angular/core';
import { Casa } from '../models/casa';
import { CasasService } from '../providers/casas.service';



@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss']
})
export class CasasComponent implements OnInit {

  casas: Casa[];
  casa: Casa;
  alquiler: boolean;
  venta: boolean;
  min: number;
  max: number;
  casasFiltradas: Casa[];
 

  constructor( private casasService : CasasService ) { 
    console.log('CasasComponent constructor');
    
    this.casas = [];
    this.casa = new Casa();
   
  }

  ngOnInit() {
    console.log('CasasComponent ngOnInit');
    this.casasService.getCasas()
    .subscribe(
      data => {
        data.forEach(el => {
          this.casas.push(el);          
        });
        this.casa = this.casas[0] || new Casa();
        this.alquiler = true;
        this.venta = true;
      }
    );
  }

  verCasa(casa){
    this.casa= casa;
  }
}
