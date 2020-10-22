import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { Router } from '@angular/router';
import { BusquedaService } from '../services/busqueda.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private _sidebarService: SidebarService,
              private router: Router,
              private _busquedaService: BusquedaService) { }

  ngOnInit() {
  }

  switchSidebar() {
    this._sidebarService.toggleSidebar();
  }

  buscar(event: any) {
    this.router.navigate(['/productos']);
    setTimeout(() => 
    {
      this._busquedaService.buscar(event.target.busqueda.value);
    },
    1000);

  }
  
}
