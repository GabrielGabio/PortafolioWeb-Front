import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/Proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectosList: Proyectos[] = [];
  roles: string[] = [];
  isAdmin = false;

  constructor(private datosPorfolio: PorfolioService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosProyectos().subscribe((data) => {
      console.log('Proyectos: ' + JSON.stringify(data));
      this.proyectosList = data;
    });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onBorrar(id: number) {
    this.datosPorfolio.eliminarProyecto(id).subscribe(() => {
      console.log('Objeto proyecto borrado exitosamente.');
      this.ngOnInit();
    });
  }
}
