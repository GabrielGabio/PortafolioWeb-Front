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
  url = 'https://aqueous-plains-67299.herokuapp.com/';

  obtenerDatosEncabezado(): Observable<any> {
    return this.http.get(this.url + 'encabezado/ver');
  }

  //Presentacion

  obtenerDatosPresentacion(): Observable<any> {
    return this.http.get(this.url + 'presentacion/ver');
  }

  buscarDatoPresentacion(id: number): Observable<Presentacion> {
    return this.http.get<Presentacion>(this.url + `presentacion/ver/${id}`);
  }

  actualizarDatosPresentacion(
    id: number,
    presentacion: Presentacion
  ): Observable<any> {
    return this.http.put<any>(
      this.url + `presentacion/editar/${id}`,
      presentacion
    );
  }

  //Aptitudes

  obtenerDatosAptitudes(): Observable<any> {
    return this.http.get(this.url + 'aptitudes/ver');
  }

  obtenerDatoAptitud(id: number): Observable<Aptitudes> {
    return this.http.get<Aptitudes>(this.url + `aptitudes/ver/${id}`);
  }

  actualizarDatosAptitudes(id: number, aptitudes: Aptitudes): Observable<any> {
    return this.http.put<any>(this.url + `aptitudes/editar/${id}`, aptitudes);
  }

  crearAptitudes(aptitudes: Aptitudes): Observable<any> {
    return this.http.post<any>(this.url + 'aptitudes/new', aptitudes);
  }

  eliminarDatoAptitud(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `aptitudes/borrar/${id}`);
  }
  //Proyectos

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get(this.url + 'proyectos/ver');
  }

  crearProyectos(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>(this.url + 'proyectos/new', proyectos);
  }

  buscarProyecto(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.url + `proyectos/ver/${id}`);
  }

  actualizarProyecto(id: number, proyectos: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(
      this.url + `proyectos/editar/${id}`,
      proyectos
    );
  }

  eliminarProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `proyectos/borrar/${id}`);
  }
  //Educacion

  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url + 'educacion/ver');
  }

  actualizarDatosEducacion(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.url + `educacion/editar/${id}`, educacion);
  }

  buscarDatosEducacion(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.url + `educacion/ver/${id}`);
  }

  eliminarDatoEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `educacion/borrar/${id}`);
  }

  crearEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.url + 'educacion/new', educacion);
  }
}
