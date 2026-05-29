import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

export const AuthGuard: CanActivateFn = () => {

  const router = inject(Router);

  // VALIDAR WINDOW

  if(typeof window !== 'undefined'){

    let usuario = localStorage.getItem("usuario");

    // EXISTE

    if(usuario){

      let datos = JSON.parse(usuario);

      // SOLO TRABAJADOR

      if(datos.rol === "trabajador"){

        return true;

      }

    }

  }

  // REDIRECCION

  return router.parseUrl("/home");

};