import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtDTO } from '../model/JwtDTO';
import { LoginUsuario } from '../model/LoginUsuario';
import { NuevoUsuario } from '../model/NuevoUsuario';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  url = 'https://aqueous-plains-67299.herokuapp.com/auth/login';
  /*currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log('El servicio de autenticacion esta corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    )
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(
      map(data => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
*/

  constructor(private httpClient: HttpClient) {
    console.log('El servicio de auth esta corriendo');
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.url, loginUsuario);
  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.url, nuevoUsuario);
  }
}
