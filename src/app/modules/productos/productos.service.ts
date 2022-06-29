import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './models/producto.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public _productos: Producto[] = [];
  private baseUrl = environment.baseUrl;

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
