import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Presentacion } from 'src/app/model/Presentacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-pre',
  templateUrl: './editar-pre.component.html',
  styleUrls: ['./editar-pre.component.css'],
})
export class EditarPreComponent implements OnInit {
  presentacion: Presentacion;

  constructor(
    private datosPorfolio: PorfolioService,
    private ruta: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio.buscarDatoPresentacion(id).subscribe((data) => {
      console.log('Datos Presentacion: ' + JSON.stringify(data));
      this.presentacion = data;
    });
  }

  onActualizar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio
      .actualizarDatosPresentacion(id, this.presentacion)
      .subscribe((data) => {
        console.log('Datos actualizados: ' + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      });
  }
}
