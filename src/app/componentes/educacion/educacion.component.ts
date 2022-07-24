import { Component, OnInit } from '@angular/core';
import { Educacion } from "src/app/model/Educacion.1";
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: Educacion[] = [];
  roles: string[] = [];
  isAdmin = false;
  constructor(private datosPorfolio: PorfolioService,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data => {
      console.log("Datos educacion: " + JSON.stringify(data));
      this.educacionList = data;
    });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  onBorrar(id: number) {
    this.datosPorfolio.eliminarDatoEducacion(id).subscribe((data) => {
      console.log("Objeto educacion borrado exitosamente.");
      this.ngOnInit();
    })
  }


}
