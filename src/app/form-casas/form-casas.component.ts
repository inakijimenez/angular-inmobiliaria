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
  casa: Casa;

  crearbtn: boolean;

  constructor(private fb: FormBuilder, private casasService: CasasService) {
    console.log('FormCasasComponent constructor');

    this.casas = [];

    this.limpiarForm();

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

  limpiarForm() {

    this.casa = new Casa;

    this.formulario = this.fb.group({
      nombre: '',
      precio: 0,
      alquiler: '0',
      habitaciones: 0,
      foto: this.casa.foto,
      direccion: '',
      tv: false,
      wc: false,
      jardin: false,
      cocina: false
    });

    this.crearbtn = true;
  }
  

  modificar(casa) {
    this.crearbtn = false;
    this.casa = casa;
    this.formulario = this.fb.group({
      nombre: this.casa.nombre,
      precio: this.casa.precio,
      alquiler: (this.casa.alquiler) ? '0' : '1',
      habitaciones: this.casa.habitaciones,
      foto: this.casa.foto,
      direccion: this.casa.direccion,
      tv: this.casa.servicios[0].disponible,
      wc: this.casa.servicios[1].disponible,
      jardin: this.casa.servicios[2].disponible,
      cocina: this.casa.servicios[3].disponible
    });
  }

  eliminar(casa) {
    console.log('eliminar %o', casa);
  }

  submit(e) {

    this.mapearFomrulario(this.formulario);

    if (this.crearbtn) {
      this.casasService.post(this.casa);
    } else {
      this.casasService.put(this.casa);
    }
  }

  mapearFomrulario(form) {

    this.casa.nombre = form.value.nombre;
    this.casa.precio = form.value.precio;

    if (form.value.alquiler == '0') {
      this.casa.alquiler = true;
    } else if (form.value.alquiler == '1') {
      this.casa.alquiler = false;
    }

    this.casa.habitaciones = form.value.habitaciones;
    this.casa.foto = form.value.foto;
    this.casa.direccion = form.value.direccion;
    
    this.casa.servicios[0].disponible = form.value.tv;
    this.casa.servicios[1].disponible = form.value.wc;
    this.casa.servicios[2].disponible = form.value.jardin;
    this.casa.servicios[3].disponible = form.value.cocina;

  }
}
