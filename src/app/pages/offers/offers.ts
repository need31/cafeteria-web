import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.html',
  styleUrl: './offers.css'
})

export class Offers implements OnInit {

  productos:any[] = [];

  ofertas:any[] = [];

  constructor(
    private productsService:ProductsService
  ){}

  ngOnInit(): void {

    this.productsService
    .obtenerProductos()
    .subscribe(data => {

      this.productos = data;

      // OFERTAS

      this.ofertas = this.productos.map(producto => {

        return {

          ...producto,

          descuento: producto.precio * 0.20,

          nuevoPrecio: producto.precio * 0.80

        };

      });

    });

  }

}