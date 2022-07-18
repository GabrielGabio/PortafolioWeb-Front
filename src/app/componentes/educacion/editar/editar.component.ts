import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from "src/app/model/Educacion.1";
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {

  educacion: Educacion;


  constructor(private datosPorfolio: PorfolioService, private ruta: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
   const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio.buscarDatosEducacion(id).subscribe((data) => {
      console.log('Datos educacion: ' + JSON.stringify(data));
      this.educacion = data;
    });
  }

  onActualizar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio.actualizarDatosEducacion(id, this.educacion).subscribe((data) => {
      console.log('Datos actualizados: ' + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    });
  }
}
