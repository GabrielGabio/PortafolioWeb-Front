import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAtriComponent } from './componentes/atributos-destrezas/edit-atri/edit-atri.component';
import { NewAtriComponent } from './componentes/atributos-destrezas/new-atri/new-atri.component';
import { CrearComponent } from './componentes/educacion/crear/crear.component';
import { EditarComponent } from './componentes/educacion/editar/editar.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditarPreComponent } from './componentes/presentacion/editar-pre/editar-pre.component';
import { EditProComponent } from './componentes/proyectos/edit-pro/edit-pro.component';
import { NewProComponent } from './componentes/proyectos/new-pro/new-pro.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'editar-pre/:id', component: EditarPreComponent },
  { path: 'new-atri', component: NewAtriComponent },
  { path: 'edit-atri/:id', component: EditAtriComponent },
  { path: 'new-pro', component: NewProComponent },
  { path: 'edit-pro/:id', component: EditProComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
