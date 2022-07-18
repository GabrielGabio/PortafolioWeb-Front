import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from "../model/Educacion.1";

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

  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>('http://localhost:8080/educacion/ver');
  }

  obtenerDatosAptitudes(): Observable<any> {
    return this.http.get('http://localhost:8080/aptitudes/ver');
  }

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get('http://localhost:8080/proyectos/ver');
  }

  actualizarDatosEducacion(id:number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/educacion/editar/${id}`, educacion);
  }

  buscarDatosEducacion(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(`http://localhost:8080/educacion/ver/${id}`);
  }

  eliminarDatoEducacion(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/educacion/borrar/${id}`);
  }

  crearEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>('http://localhost:8080/educacion/new',educacion);
  }
}
