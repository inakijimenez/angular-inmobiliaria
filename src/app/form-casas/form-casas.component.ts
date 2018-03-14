import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CasasService } from '../providers/casas.service';
import { Servicio } from '../models/servicio';
import { Casa } from '../models/casa';

@Component({
  selector: 'app-form-casas',
  templateUrl: './form-casas.component.html',
  styleUrls: ['./form-casas.component.scss']
})
export class FormCasasComponent implements OnInit {

  formulario: FormGroup;
  casas: Casa[];

  constructor(private fb: FormBuilder, private casasService: CasasService) {
    console.log('FormCasasComponent constructor');

    this.casas = [];

    this.formulario = this.fb.group({
      nombre: '',
      precio: 0,
      direccion: '',
      habitaciones: 0,
      // 
      servicios: this.fb.array([
        this.fb.group({
          nombre: 'tv',
          disponible: false
        }),
        this.fb.group({
          nombre: 'wc',
          disponible: false
        }),
        this.fb.group({
          nombre: 'jardin',
          disponible: true
        }),
        this.fb.group({
          nombre: 'cocina',
          disponible: false
        })
      ])
    });

  }

  ngOnInit() {
    console.log('FormCasasComponent ngOnInit');

    this.getCasas();

  }

  getCasas() {
    this.casasService.getCasas()
      .subscribe(data => {
        data.forEach(el => {
          this.casas.push(el);
        });
      });
  }

  crearServicios() {

    this.fb.group({
      nombre: 'tv',
      disponible: false
    });
    this.fb.group({
      nombre: 'wc',
      disponible: false
    });
    this.fb.group({
      nombre: 'jardin',
      disponible: false
    });
    this.fb.group({
      nombre: 'cocina',
      disponible: false
    });
  }
}
