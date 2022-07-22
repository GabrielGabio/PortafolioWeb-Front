import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aptitudes } from 'src/app/model/Aptitudes';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-new-atri',
  templateUrl: './new-atri.component.html',
  styleUrls: ['./new-atri.component.css'],
})
export class NewAtriComponent implements OnInit {
  name: string = null;
  valor: string = null;
  color: string = null;
  valorALF: string = null;

  constructor(private datosPorfolio: PorfolioService, private ruta: Router) {}

  ngOnInit(): void {}

  onCrear(): void {
    let value: number = parseInt(this.valor);
    if (value <= 49) {
      const apt = new Aptitudes(
        (<HTMLInputElement>document.getElementById('name')).value,
        (<HTMLInputElement>document.getElementById('val')).value,
        'Bajo',
        'bg-danger'
      );
      this.datosPorfolio.crearAptitudes(apt).subscribe(() => {
        console.log('Creado con exito.');
        this.ruta.navigate(['/portfolio']);
      });
    } else if (value >= 50 && value <= 64) {
      const apt = new Aptitudes(
        (<HTMLInputElement>document.getElementById('name')).value,
        (<HTMLInputElement>document.getElementById('val')).value,
        'Intermedio',
        'bg-info'
      );
      this.datosPorfolio.crearAptitudes(apt).subscribe(() => {
        console.log('Creado con exito.');
        this.ruta.navigate(['/portfolio']);
      });
    } else if (value >= 65 && value <= 79) {
      const apt = new Aptitudes(
        (<HTMLInputElement>document.getElementById('name')).value,
        (<HTMLInputElement>document.getElementById('val')).value,
        'Medio-Alto',
        ''
      );
      this.datosPorfolio.crearAptitudes(apt).subscribe(() => {
        console.log('Creado con exito.');
        this.ruta.navigate(['/portfolio']);
      });
    } else if (value >= 80 && value <= 100) {
      const apt = new Aptitudes(
        (<HTMLInputElement>document.getElementById('name')).value,
        (<HTMLInputElement>document.getElementById('val')).value,
        'Alto',
        'bg-success'
      );
      this.datosPorfolio.crearAptitudes(apt).subscribe(() => {
        console.log('Creado con exito.');
        this.ruta.navigate(['/portfolio']);
      });
    }

  }
}
