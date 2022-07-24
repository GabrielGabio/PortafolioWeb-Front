import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  miPorfolio: any;
  isLogged = false;
  constructor(
    private datosPorfolio: PorfolioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.datosPorfolio.obtenerDatosEncabezado().subscribe((data) => {
        console.log('Datos personales: ' + JSON.stringify(data));
        this.miPorfolio = data[0];
      });
    } else {
      this.isLogged = false;
      this.datosPorfolio.obtenerDatosEncabezado().subscribe((data) => {
        console.log('Datos personales: ' + JSON.stringify(data));
        this.miPorfolio = data[0];
      });
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();

  }
}
