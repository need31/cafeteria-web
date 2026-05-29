import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard implements OnInit {

  usuario:any;

  productos:any[] = [];

  usuarios:any[] = [];

  totalProductos:number = 0;

  totalStock:number = 0;

  totalValor:number = 0;

  constructor(

    private router:Router,
    private productsService:ProductsService

  ){}

  ngOnInit(): void {

    // USUARIO LOGUEADO

    const usuarioGuardado = localStorage.getItem("usuario");

    if(!usuarioGuardado){

      this.router.navigate(['/login']);

      return;

    }

    this.usuario = JSON.parse(usuarioGuardado);

    // SOLO TRABAJADOR ENTRA

    if(this.usuario.rol !== "trabajador"){

      this.router.navigate(['/home']);

      return;

    }

    // PRODUCTOS REALES DESDE db.json

    this.productsService
    .obtenerProductos()
    .subscribe((data:any) => {

      this.productos = data;

      console.log(this.productos);

      // TOTAL PRODUCTOS

      this.totalProductos = this.productos.length;

      // STOCK TOTAL

      this.totalStock = this.productos.reduce(

        (total:number, producto:any) =>

          total + producto.stock,

        0

      );

      // VALOR TOTAL INVENTARIO

      this.totalValor = this.productos.reduce(

        (total:number, producto:any) =>

          total + (producto.precio * producto.stock),

        0

      );

    });

    // USUARIOS

    this.usuarios = JSON.parse(

      localStorage.getItem("usuarios") || "[]"

    );

  }

  cerrarSesion(){

    localStorage.removeItem("usuario");

    alert("Sesión cerrada");

    this.router.navigate(['/login']);

  }

}