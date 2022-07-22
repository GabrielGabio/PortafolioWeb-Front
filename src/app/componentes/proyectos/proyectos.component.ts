import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/Proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectosList: Proyectos[] = [];
  

  constructor(private datosPorfolio: PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosProyectos().subscribe((data) => {
      console.log('Proyectos: ' + JSON.stringify(data));
      this.proyectosList = data;
    });
  }

  onBorrar(id: number) {
    this.datosPorfolio.eliminarProyecto(id).subscribe(() => {
      console.log('Objeto proyecto borrado exitosamente.');
      this.ngOnInit();
    });
  }
}
