import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/Proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.css'],
})
export class NewProComponent implements OnInit {
  name: string = null;
  comienzo: string = null;
  fin: string = null;
  about: string = null;
  urlGitHub: string = null;
  textUrlGitHub: string = null;
  urlProyecto: string = null;
  textUrlProyecto: string = null;
  constructor(private datosPorfolio: PorfolioService, private ruta: Router) {}

  ngOnInit(): void {}

  onCrear(): void {
    const proyectos = new Proyectos(
      this.name,
      this.comienzo,
      this.fin,
      this.about,
      this.urlGitHub,
      this.textUrlGitHub,
      this.urlProyecto,
      this.textUrlProyecto
    );
    this.datosPorfolio.crearProyectos(proyectos).subscribe(() => {
      console.log('Creado con exito.');
      this.ruta.navigate(['/portfolio']);
    });
  }
}
