import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductosListService } from 'src/app/services/productos-list.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _ProductosList: ProductosListService) { }

  ngOnInit() {
    this.getData();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.productoId = id;
      console.log("ID seleccionada: " + this.productoId);
    });

    this._ProductosList.getProductos().subscribe(productos => {
      this.producto = productos.find(x => x.id == this.productoId);
      console.log(this.producto);
    });
  }

  ngAfterViewInit() {
    this.getGraph();
  }

  @ViewChild('myCanvas') myCanvas: ElementRef;
    public context: CanvasRenderingContext2D;


  public productoId;
  public producto;
  
  public data = [];
  public chart = [];

  public min;
  public max;
  getRandomInt() {
    this.min = Math.ceil(10);
    this.max = Math.floor(120);
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }

  getData() {
    this.data.push(this.getRandomInt());
    this.data.push(this.getRandomInt());
    this.data.push(this.getRandomInt());
    this.data.push(this.getRandomInt());
  }

  getGraph() {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril"],
        datasets: [{
          label: 'Ventas totales',
          data: this.data,
          borderColor: "#6390f0",
          borderWidth: 3,
          lineTension: 0
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
