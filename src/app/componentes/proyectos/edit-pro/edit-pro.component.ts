import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/Proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css'],
})
export class EditProComponent implements OnInit {

  proyecto: Proyectos;

  constructor(
    private datosPorfolio: PorfolioService,
    private ruta: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio.buscarProyecto(id).subscribe((data) => {
      console.log('Datos educacion: ' + JSON.stringify(data));
      this.proyecto = data;
    });
  }

  onActualizar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio
      .actualizarProyecto(id, this.proyecto)
      .subscribe((data) => {
        console.log('Datos actualizados: ' + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      });
  }
}
