import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion.1';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  school: string = null;
  title: string = null;
  comienzo: string = null;
  fin: string = null;
  img: string = null;
  enlace: string = null;

  constructor(private datosPorfolio: PorfolioService, private ruta: Router) { }

  ngOnInit(): void {
  }

  onCrear(): void {
    const educacion = new Educacion(this.school, this.title, this.comienzo, this.fin, this.img, this.enlace);
    this.datosPorfolio.crearEducacion(educacion).subscribe(data => {
      console.log("Creado con exito.");
      this.ruta.navigate(['/portfolio']);
    })
  }
}
