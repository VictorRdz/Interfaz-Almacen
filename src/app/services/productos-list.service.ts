import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProducto } from '../interfaces/producto';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosListService {

  constructor(private http: HttpClient) { }

  public _url = 'assets/data/productos.json';

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this._url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Error del servidor");
  }

}