import { Component, OnInit } from '@angular/core';
import { Presentacion } from 'src/app/model/Presentacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
})
export class PresentacionComponent implements OnInit {
  presentacion: Presentacion[] = [];
  roles: string[] = [];
  isAdmin = false;
  constructor(
    private datosPorfolio: PorfolioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosPresentacion().subscribe((data) => {
      console.log('Presentacion: ' + JSON.stringify(data));
      this.presentacion = data;
    });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
}
