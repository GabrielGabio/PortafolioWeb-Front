import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {

  constructor(private http: HttpClient) {}

  obtenerDatosEncabezado(): Observable<any> {
    return this.http.get('http://localhost:8080/encabezado/ver');
  }

  obtenerDatosPresentacion(): Observable<any> {
    return this.http.get('http://localhost:8080/presentacion/ver');
  }

  obtenerDatosEducacion(): Observable<any> {
    return this.http.get('http://localhost:8080/educacion/ver');
  }

  obtenerDatosAptitudes(): Observable<any> {
    return this.http.get('http://localhost:8080/aptitudes/ver');
  }

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get('http://localhost:8080/proyectos/ver');
  }
}
