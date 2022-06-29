import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public _productos: Producto[] = [];
  private baseUrl = 'http://localhost:4000/api/v1';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    const endpoint = `${this.baseUrl}/productos`;
    return this.http.get<Producto[]>(endpoint);
  }

  addProducto(producto: Producto) {
    const endpoint = `${this.baseUrl}/productos`;
    return this.http.post(endpoint, producto);
  }

  deleteProducto(id: number) {
    const endpoint = `${this.baseUrl}/productos/${id}`;
    return this.http.delete(endpoint);
  }

  updateProducto(producto: Producto) {
    const endpoint = `${this.baseUrl}/productos/${producto.id}`;
    return this.http.put(endpoint, producto);
  }
}
