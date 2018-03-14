import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../models/casa';
import { CasasService } from '../providers/casas.service';

@Pipe({
  name: 'casasFilter'
})
export class CasasFilterPipe implements PipeTransform {

  casasFiltradas: Casa[] = [];

  transform(casas: Casa[], alquiler: boolean, venta:boolean): Casa[] {

    if(!casas){
      return [new Casa];
    }
    
    else {
      this.casasFiltradas = [];
      if (alquiler) {
        casas.forEach((c) => {
          if (c.alquiler) {
            this.casasFiltradas.push(c);
          }
        });
      } 
      if (venta){
        casas.forEach((c) => {
          if (!c.alquiler) {
            this.casasFiltradas.push(c);
          }
        });
      }
      
      return this.casasFiltradas;
    }
    // if(!venta){
    //   casas.forEach( (c, i:number)=>{
    //     if(!c.alquiler){
    //       this.casasFiltradas.splice(i);
    //     }
    //   });
    // }

    // if(!searchText){
    //   return this.casasFiltradas;
    // } else {
    //   searchText = searchText.toLowerCase();
    //   let casa = '';
    //   return casas.filter(it => {
    //     casa = it.nombre + it.direccion;
    //     casa = casa.toLowerCase();
    //     return casa.includes(searchText);
    //   });
    // }


  }

}
