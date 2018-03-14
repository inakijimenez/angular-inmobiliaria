import { Component, OnInit } from '@angular/core';
import { Casa } from '../models/casa';
import { CasasService } from '../providers/casas.service';
import { CasasFilterPipe } from '../pipes/casasFilter';


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
 

  constructor( private casasService : CasasService ) { 
    console.log('CasasComponent constructor');
    
    this.casas = [];
    this.casa = new Casa;
    this.alquiler = true;
    this.venta = true;
  }

  ngOnInit() {
    console.log('CasasComponent ngOnInit');
    this.casasService.getCasas()
    .subscribe(
      data => {
        data.forEach(el => {
          this.casas.push(el);          
        });
        this.casa = this.casas[0];
      }
    );
  }

  verCasa(casa){
    console.log('CasasComponent verCasa');
    this.casa= casa;
    //console.log('%o', this.casa);
  }

  printAlquiler(){
    console.log('alquiler ' + this.alquiler);
    console.log(this.casas);
  }
}
