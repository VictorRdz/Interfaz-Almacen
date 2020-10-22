import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosListService } from 'src/app/services/productos-list.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private _ProductosList: ProductosListService,
              private _busquedaService: BusquedaService) { }

  ngOnInit() {
    this.getProductos();
    this.getFilter();
  }

  getProductos() {
    this._ProductosList.getProductos().subscribe(productos => {
      this.productos = productos;
      this.dataSource = new MatTableDataSource(this.productos);
      this.dataSource.paginator = this.paginator;
    });
  }

  getFilter() {
    this._busquedaService.busqueda.subscribe((val) => {
      this.filter = val;
      this.applyFilter();
    });
  }

  applyFilter() {
    this.dataSource.filter = this.filter.trim().toLowerCase();
  }

  restartFilter() {
    this.filter = "";
    this.applyFilter();
  }

  public filter = "";
  public productos = [];
  public dataSource;
  public columnsToDisplay = ['codigo', 'nombre', 'precio', 'cantidad', 'id'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
}
