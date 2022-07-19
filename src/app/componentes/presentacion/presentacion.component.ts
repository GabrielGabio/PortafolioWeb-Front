import { Component, OnInit } from '@angular/core';
import { Presentacion } from 'src/app/model/Presentacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
})
export class PresentacionComponent implements OnInit {
  presentacion: Presentacion[]=[];
  constructor(private datosPorfolio: PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosPresentacion().subscribe((data) => {
      console.log("Presentacion: " + JSON.stringify(data));
      this.presentacion = data;
    });
  }
}
