import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../models/casa';

@Pipe({
  name: 'casas'
})
export class CasasPipe implements PipeTransform {

  transform(casas: Casa[], searchtext: string): Casa[] {
    

    
    if (!searchtext) {
      return casas;
    } else {
      searchtext = searchtext.toLowerCase();
      let casa = '';
      return casas.filter(it => {
        casa = it.nombre + it.direccion;
        casa = casa.toLowerCase();
        return casa.includes(searchtext);
      });
    }
  }

}
