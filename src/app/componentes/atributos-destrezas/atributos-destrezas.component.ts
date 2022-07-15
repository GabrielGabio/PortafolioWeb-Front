import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-atributos-destrezas',
  templateUrl: './atributos-destrezas.component.html',
  styleUrls: ['./atributos-destrezas.component.css']
})
export class AtributosDestrezasComponent implements OnInit {
  aptitudesList: any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosAptitudes().subscribe((data) => {
      console.log('Aptitudes: ' + JSON.stringify(data));
      this.aptitudesList = data//.aptitudes;
    })
  }

}
