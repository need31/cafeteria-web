import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  apiUrl = "http://localhost:3000/productos";

  constructor(private http: HttpClient) {}

  obtenerProductos() {

    return this.http.get<any[]>(this.apiUrl);

  }

}