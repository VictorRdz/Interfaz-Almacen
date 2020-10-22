import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor() { 
    this.busqueda.subscribe((val) => {
      this.texto = val;
    });
  }

  public busqueda: Subject<string> = new Subject<string>();
  public texto = "";

  buscar(val) {
    this.busqueda.next(val);
  }
}
