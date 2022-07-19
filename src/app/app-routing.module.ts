import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './componentes/educacion/crear/crear.component';
import { EditarComponent } from './componentes/educacion/editar/editar.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditarPreComponent } from './componentes/presentacion/editar-pre/editar-pre.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'crear', component: CrearComponent },
  {path:'editar-pre/:id', component:EditarPreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
