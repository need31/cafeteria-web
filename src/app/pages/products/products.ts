import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products';
import { Carrito } from '../../services/carrito';


@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products implements OnInit {

  productos:any[] = [];

  textoBuscar:string = "";

  categoriaSeleccionada:string = "";

  constructor(

    private productsService:ProductsService,
    public carrito:Carrito

  ){}

  ngOnInit(): void {

    this.productsService
    .obtenerProductos()
    .subscribe((data:any) => {

      this.productos = data;

      console.log(this.productos);

    });

  }

  // FILTRAR PRODUCTOS

  productosFiltrados(){

    return this.productos.filter(producto => {

      // BUSCADOR

      const coincideTexto = producto.nombre
      .toLowerCase()
      .includes(this.textoBuscar.toLowerCase());

      // CATEGORIA

      const coincideCategoria =

        this.categoriaSeleccionada == ""

        ||

        producto.categoria == this.categoriaSeleccionada;

      return coincideTexto && coincideCategoria;

    });

  }

  // COMPRAR

comprar(producto:any){

  if(producto.stock <= 0){

    alert("Producto sin stock");

    return;

  }

  this.carrito.agregar(producto);

  alert(producto.nombre + " agregado al carrito");

}

finalizarCompra(){

  if(this.carrito.carrito.length == 0){

    alert("El carrito está vacío");

    return;

  }

  alert("Compra realizada correctamente ");

  this.carrito.vaciar();

}

}