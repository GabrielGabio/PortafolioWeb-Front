import { Component, OnInit } from '@angular/core';
import { Educacion } from "src/app/model/Educacion.1";
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: Educacion[] = [];
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data => {
      console.log("Datos educacion: " + JSON.stringify(data));
      this.educacionList = data;
    })
  }

  onBorrar(id: number) {
    this.datosPorfolio.eliminarDatoEducacion(id).subscribe((data) => {
      console.log("Objeto educacion borrado exitosamente.");
      this.ngOnInit();
    })
  }


}
