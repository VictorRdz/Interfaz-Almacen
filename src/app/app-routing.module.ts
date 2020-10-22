import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './content/inicio/inicio.component';
import { EstadisticasComponent } from './content/estadisticas/estadisticas.component';
import { ListaComponent } from './content/lista/lista.component';
import { AnadirComponent } from './content/anadir/anadir.component';
import { AboutComponent } from './content/about/about.component';
import { ProductoDetailComponent } from './content/producto-detail/producto-detail.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: "full" },
  { path: 'inicio', component: InicioComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'productos', component: ListaComponent },
  { path: 'productos/:id', component: ProductoDetailComponent },
  { path: 'anadir', component: AnadirComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
