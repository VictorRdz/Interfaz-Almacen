import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { ContentComponent } from './content/content.component';

import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './content/inicio/inicio.component';
import { EstadisticasComponent } from './content/estadisticas/estadisticas.component';
import { ListaComponent } from './content/lista/lista.component';
import { AnadirComponent } from './content/anadir/anadir.component';
import { AboutComponent } from './content/about/about.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductoDetailComponent } from './content/producto-detail/producto-detail.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    SidebarItemComponent,
    ContentComponent,
    InicioComponent,
    EstadisticasComponent,
    ListaComponent,
    AnadirComponent,
    AboutComponent,
    ProductoDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
