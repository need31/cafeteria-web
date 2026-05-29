import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  imports: [CommonModule],
  templateUrl: './my-account.html',
  styleUrl: './my-account.css'
})

export class MyAccount implements OnInit {

  usuario:any = {};

  constructor(
    private router:Router
  ){}

  ngOnInit(): void {

    let usuarioGuardado = localStorage.getItem("usuario");

    if(usuarioGuardado){

      this.usuario = JSON.parse(usuarioGuardado);

    }else{

      this.router.navigate(["/login"]);

    }

  }

  cerrarSesion(){

    localStorage.removeItem("usuario");

    alert("Sesión cerrada");

    this.router.navigate(["/home"]);

  }

}