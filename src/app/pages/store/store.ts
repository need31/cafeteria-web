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
      imagen: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
    },

    {
      nombre: "Cafe Aroma Miraflores",
      direccion: "Calle Las Flores 456",
      horario: "9:00 am - 11:00 pm",
      telefono: "999 333 444",
      imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },

    {
      nombre: "Cafe Aroma San Isidro",
      direccion: "Av. Cafetal 789",
      horario: "7:00 am - 9:00 pm",
      telefono: "999 555 666",
      imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    }

  ];

}