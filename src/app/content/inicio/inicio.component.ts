import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getGraph();
  }

  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  public data = [4035, 4084, 4190, 4303];
  public chart = [];
  
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
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }
}
