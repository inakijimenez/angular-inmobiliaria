import { Component, OnInit } from '@angular/core';
import { Casa } from '../models/casa';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss']
})
export class CasasComponent implements OnInit {

  casas: Casa[];

  constructor() { 
    console.log('CasasComponent constructor');
    this.casas = [ new Casa, new Casa];
  }

  ngOnInit() {
  }

}
