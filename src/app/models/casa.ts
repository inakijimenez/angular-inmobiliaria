import { Servicio } from "./servicio";

export class Casa {

    id: number;
    nombre: string;
    precio: number;
    alquiler: boolean;
    habitaciones: number;
    foto: string;
    direccion: string;
    servicios: Servicio[];

    constructor() {
        this.nombre = 'casa';
        this.precio = 2000;
        this.alquiler = false;
        this.habitaciones = 3;
        this.foto = 'https://image.freepik.com/iconos-gratis/casa_318-42210.jpg';
        this.direccion = 'bilbao';
        this.servicios = [
            {nombre: 'tv', disponible: false},
            {nombre: 'wc', disponible: false},
            {nombre: 'jardin', disponible: false},
            {nombre: 'cocina', disponible: false}
        ];

    }
}