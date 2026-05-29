import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  imports: [CommonModule],
  templateUrl: './store.html',
  styleUrl: './store.css'
})

export class Store {

  sucursales = [

    {
      nombre: "Cafe Aroma Centro",
      direccion: "Av. Principal 123 - Lima",
      horario: "8:00 am - 10:00 pm",
      telefono: "999 111 222",
      imagen: "img/tienda1.jpg"
    },

    {
      nombre: "Cafe Aroma Miraflores",
      direccion: "Calle Las Flores 456",
      horario: "9:00 am - 11:00 pm",
      telefono: "999 333 444",
      imagen: "img/tienda2.jpg"
    },

    {
      nombre: "Cafe Aroma San Isidro",
      direccion: "Av. Cafetal 789",
      horario: "7:00 am - 9:00 pm",
      telefono: "999 555 666",
      imagen: "img/tienda3.jpg"
    }

  ];

}