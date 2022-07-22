import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aptitudes } from 'src/app/model/Aptitudes';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-edit-atri',
  templateUrl: './edit-atri.component.html',
  styleUrls: ['./edit-atri.component.css'],
})
export class EditAtriComponent implements OnInit {
  aptitudes: Aptitudes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private datosPorfolio: PorfolioService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio.obtenerDatoAptitud(id).subscribe((data) => {
      console.log('Datos atributos: ' + JSON.stringify(data));
      this.aptitudes = data;
    });
  }

  onActualizar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    let value: number = parseInt(this.aptitudes.valor);
    if (value <= 49) {
      let apt: Aptitudes = {
        name: (<HTMLInputElement>document.getElementById('name')).value,
        valor: (<HTMLInputElement>document.getElementById('val')).value,
        color: 'bg-danger',
        valorALF: 'Bajo',
      };
      this.datosPorfolio.actualizarDatosAptitudes(id, apt).subscribe((data) => {
        console.log('Datos actualizados: ' + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      });
    } else if (value >= 50 && value <= 64) {
      let apt: Aptitudes = {
        name: (<HTMLInputElement>document.getElementById('name')).value,
        valor: (<HTMLInputElement>document.getElementById('val')).value,
        color: 'bg-info',
        valorALF: 'Intermedio',
      };
      this.datosPorfolio.actualizarDatosAptitudes(id, apt).subscribe((data) => {
        console.log('Datos actualizados: ' + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      });
    } else if (value >= 65 && value <= 79) {
      let apt: Aptitudes = {
        name: (<HTMLInputElement>document.getElementById('name')).value,
        valor: (<HTMLInputElement>document.getElementById('val')).value,
        color: '',
        valorALF: 'Medio-Alto',
      };
      this.datosPorfolio.actualizarDatosAptitudes(id, apt).subscribe((data) => {
        console.log('Datos actualizados: ' + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      });
    } else if (value >= 80 && value <= 100) {
      let apt: Aptitudes = {
        name: (<HTMLInputElement>document.getElementById('name')).value,
        valor: (<HTMLInputElement>document.getElementById('val')).value,
        color: 'bg-success',
        valorALF: 'Alto',
      };
      this.datosPorfolio.actualizarDatosAptitudes(id, apt).subscribe((data) => {
        console.log('Datos actualizados: ' + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      });
    }
  }
}
