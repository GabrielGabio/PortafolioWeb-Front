import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AtributosDestrezasComponent } from './componentes/atributos-destrezas/atributos-destrezas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { PorfolioService } from './servicios/porfolio.service';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor.service';
import { EditarComponent } from './componentes/educacion/editar/editar.component';
import { CrearComponent } from './componentes/educacion/crear/crear.component';
import { EditarPreComponent } from './componentes/presentacion/editar-pre/editar-pre.component';
import { NewAtriComponent } from './componentes/atributos-destrezas/new-atri/new-atri.component';
import { EditAtriComponent } from './componentes/atributos-destrezas/edit-atri/edit-atri.component';
import { NewProComponent } from './componentes/proyectos/new-pro/new-pro.component';
import { EditProComponent } from './componentes/proyectos/edit-pro/edit-pro.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentacionComponent,
    EducacionComponent,
    AtributosDestrezasComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    EditarComponent,
    CrearComponent,
    EditarPreComponent,
    NewAtriComponent,
    EditAtriComponent,
    NewProComponent,
    EditProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PorfolioService,
  interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
