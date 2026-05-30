import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  correo:string = "";

  password:string = "";

  constructor(
    private router:Router
  ){}

  login(){

    // VALIDAR CAMPOS

    if(

      this.correo.trim() === "" ||
      this.password.trim() === ""

    ){

      alert("Complete todos los campos");

      return;

    }

    // =========================
    // TRABAJADOR
    // =========================

    if(

      this.correo === "admin@cafearoma.com" &&
      this.password === "123456"

    ){

      const trabajador = {

        nombre:"Administrador",
        correo:this.correo,
        rol:"trabajador"

      };

      // GUARDAR SESION

      localStorage.setItem(

        "usuario",

        JSON.stringify(trabajador)

      );

      alert("Bienvenido trabajador");

      // REDIRECCION

      this.router.navigate(['/dashboard']);

      return;

    }

    // =========================
    // CLIENTE
    // =========================

    const cliente = {

      nombre:"Cliente",
      correo:this.correo,
      rol:"cliente"

    };

    // OBTENER USUARIOS

    let usuarios:any[] = JSON.parse(

      localStorage.getItem("usuarios") || "[]"

    );

    // VALIDAR SI EXISTE

    const existe = usuarios.find(

      usuario => usuario.correo === this.correo

    );

    // AGREGAR USUARIO

    if(!existe){

      usuarios.push(cliente);

      localStorage.setItem(

        "usuarios",

        JSON.stringify(usuarios)

      );

    }

    // GUARDAR SESION

    localStorage.setItem(

      "usuario",

      JSON.stringify(cliente)

    );

    alert("Bienvenido cliente");

    // REDIRECCION

    this.router.navigate(['/mi-cuenta']);

  }

}