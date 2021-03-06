import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';


@Injectable()
export class CasasService {

  constructor(private http : HttpClient) {
    console.log('CasasService constructor');
   }

   getCasas(): Observable<any>{
    let url = GLOBAL.endpoint + '/casas/';
    return this.http.get(url);
   }

   getCasa(id:number): Observable<any>{
    let url = GLOBAL.endpoint + '/casas/' + id;
    return this.http.get(url);
   }

   post(casa): Observable<any>{
    console.log('post %o', casa);
    let url = GLOBAL.endpoint + '/casas';
    return this.http.post(url, casa);
   }

   put(casa): Observable<any>{
    console.log('put %o', casa);
    let url = GLOBAL.endpoint + '/casas/' + casa.id;
    return this.http.put(url, casa);
   }

   delete(casa){
    console.log('delete %o', casa);
    let url = GLOBAL.endpoint + '/casas/' + casa.id;
    return this.http.delete(url, casa);
   }
}
