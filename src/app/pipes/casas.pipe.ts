import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../models/casa';

@Pipe({
  name: 'casasPipe'
})
export class CasasPipe implements PipeTransform {

  transform(casas: Casa[], searchtext: string, alquiler: boolean, venta: boolean, min: number, max: number): Casa[] {

    let casasFiltradas: Casa[];
    let casasTemp: Casa[];

    if (!casas) return [];

    casasFiltradas = [];
    casasTemp = [];

    let eliminados = 0;
    if (alquiler && !venta) {
      casas.forEach((c, i) => {
        if (c.alquiler) {
          casasFiltradas.push(c);
        }
      });
    } else if (venta && !alquiler) {
      casas.forEach((c, i) => {
        if (!c.alquiler) {
          casasFiltradas.push(c);
        }
      });
    } else {
      casasFiltradas = casas;
    }

    if (min) {
      casasFiltradas.forEach(c => {
        if (c.precio >= min) {
          casasTemp.push(c);
        }
      });
      casasFiltradas = casasTemp;
    }
    casasTemp = [];

    if (max) {
      casasFiltradas.forEach(c => {
        if (c.precio <= max) {
          casasTemp.push(c);
        }
      });
      casasFiltradas = casasTemp;
    }
    casasTemp = [];

    if (!searchtext) {
      return casasFiltradas;
    } else {
      searchtext = searchtext.toLowerCase();
      let casa = '';
      return casasFiltradas.filter(it => {
        casa = it.nombre + it.direccion;
        casa = casa.toLowerCase();
        return casa.includes(searchtext);
      });
    }
  }

}
