import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class Contact {

  nombre:string = "";

  correo:string = "";

  asunto:string = "";

  mensaje:string = "";

  enviarFormulario(){

    if(

      this.nombre == "" ||
      this.correo == "" ||
      this.asunto == "" ||
      this.mensaje == ""

    ){

      alert("Complete todos los campos");

      return;

    }

    alert("Mensaje enviado correctamente ");

    // LIMPIAR

    this.nombre = "";
    this.correo = "";
    this.asunto = "";
    this.mensaje = "";

  }

}