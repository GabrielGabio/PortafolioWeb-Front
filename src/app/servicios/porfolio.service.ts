import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/Educacion.1';
import { Presentacion } from '../model/Presentacion';
import { Aptitudes } from '../model/Aptitudes';
import { Proyectos } from '../model/Proyectos';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {
  constructor(private http: HttpClient) {}

  obtenerDatosEncabezado(): Observable<any> {
    return this.http.get('http://localhost:8080/encabezado/ver');
  }

  //Presentacion

  obtenerDatosPresentacion(): Observable<any> {
    return this.http.get('http://localhost:8080/presentacion/ver');
  }

  buscarDatoPresentacion(id: number): Observable<Presentacion> {
    return this.http.get<Presentacion>(
      `http://localhost:8080/presentacion/ver/${id}`
    );
  }

  actualizarDatosPresentacion(
    id: number,
    presentacion: Presentacion
  ): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/presentacion/editar/${id}`,
      presentacion
    );
  }

  //Aptitudes

  obtenerDatosAptitudes(): Observable<any> {
    return this.http.get('http://localhost:8080/aptitudes/ver');
  }

  obtenerDatoAptitud(id: number): Observable<Aptitudes> {
    return this.http.get<Aptitudes>(
      `http://localhost:8080/aptitudes/ver/${id}`
    );
  }

  actualizarDatosAptitudes(id: number, aptitudes: Aptitudes): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/aptitudes/editar/${id}`,
      aptitudes
    );
  }

  crearAptitudes(aptitudes: Aptitudes): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/aptitudes/new',
      aptitudes
    );
  }

  eliminarDatoAptitud(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/aptitudes/borrar/${id}`
    );
  }
  //Proyectos

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get('http://localhost:8080/proyectos/ver');
  }

  crearProyectos(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>('http://localhost:8080/proyectos/new', proyectos);
  }

  buscarProyecto(id: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(`http://localhost:8080/proyectos/ver/${id}`)
  }

  actualizarProyecto(id: number, proyectos: Proyectos): Observable<Proyectos>{
    return this.http.put<Proyectos>(`http://localhost:8080/proyectos/editar/${id}`, proyectos);
  }

  eliminarProyecto(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/proyectos/borrar/${id}`);
  }
  //Educacion

  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>('http://localhost:8080/educacion/ver');
  }

  actualizarDatosEducacion(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/educacion/editar/${id}`,
      educacion
    );
  }

  buscarDatosEducacion(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(
      `http://localhost:8080/educacion/ver/${id}`
    );
  }

  eliminarDatoEducacion(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/educacion/borrar/${id}`
    );
  }

  crearEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/educacion/new',
      educacion
    );
  }
}
