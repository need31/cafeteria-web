import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Carrito {

  carrito:any[] = [];

  constructor() {

    const data = localStorage.getItem("carrito");

    if(data){

      this.carrito = JSON.parse(data);

    }

  }

  // GUARDAR

  guardar(){

    localStorage.setItem(

      "carrito",

      JSON.stringify(this.carrito)

    );

  }

  // AGREGAR

  agregar(producto:any){

    let item = this.carrito.find(

      p => p.id === producto.id

    );

    if(item){

      item.cantidad++;

    }else{

      this.carrito.push({

        ...producto,

        cantidad:1

      });

    }

    this.guardar();

  }

  // ELIMINAR

  eliminar(id:number){

    this.carrito = this.carrito.filter(

      p => p.id !== id

    );

    this.guardar();

  }

  // AUMENTAR

  aumentar(item:any){

    item.cantidad++;

    this.guardar();

  }

  // DISMINUIR

  disminuir(item:any){

    if(item.cantidad > 1){

      item.cantidad--;

    }else{

      this.eliminar(item.id);

    }

    this.guardar();

  }

  // CANTIDAD TOTAL

  cantidadTotal(){

    return this.carrito.reduce(

      (total, item) =>

        total + item.cantidad,

      0

    );

  }

  // TOTAL

  total(){

    return this.carrito.reduce(

      (total, item) =>

        total + (item.precio * item.cantidad),

      0

    );

  }

  // VACIAR

  vaciar(){

    this.carrito = [];

    this.guardar();

  }

}