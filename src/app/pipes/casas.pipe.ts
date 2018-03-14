import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../models/casa';

@Pipe({
  name: 'casasPipe'
})
export class CasasPipe implements PipeTransform {

  casasFiltradas: Casa[];


  transform(casas: Casa[], searchtext: string, alquiler: boolean, venta: boolean, min: number, max: number): Casa[] {


    this.casasFiltradas = [];

    this.casasFiltradas = [];


    if (alquiler && !venta) {
      casas.forEach((c) => {
        if (c.alquiler) {
          this.casasFiltradas.push(c);
        }
      });
    } else if (venta && !alquiler){
      casas.forEach((c) => {
        if (!c.alquiler) {
          this.casasFiltradas.push(c);
        }
      });
    } else {
      this.casasFiltradas = casas;
    }

    if (!searchtext) {
      return this.casasFiltradas;
    } else {
      searchtext = searchtext.toLowerCase();
      let casa = '';
      return this.casasFiltradas.filter(it => {
        casa = it.nombre + it.direccion;
        casa = casa.toLowerCase();
        return casa.includes(searchtext);
      });
    }
  }

}
