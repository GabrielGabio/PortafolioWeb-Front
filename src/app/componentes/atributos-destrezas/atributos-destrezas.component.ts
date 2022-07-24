import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-atributos-destrezas',
  templateUrl: './atributos-destrezas.component.html',
  styleUrls: ['./atributos-destrezas.component.css'],
})
export class AtributosDestrezasComponent implements OnInit {
  aptitudesList: any;
  roles: string[] = [];
  isAdmin = false;
  constructor(private datosPorfolio: PorfolioService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosAptitudes().subscribe((data) => {
      console.log('Aptitudes: ' + JSON.stringify(data));
      this.aptitudesList = data; //.aptitudes;
    });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  onBorrar(id: number) {
    this.datosPorfolio.eliminarDatoAptitud(id).subscribe((data) => {
      console.log('Objeto Aptitud borrado exitosamente.');
      this.ngOnInit();
    });
  }
}
