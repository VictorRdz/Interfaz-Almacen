import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() {
    this._sidebarService.sidebarStatus.subscribe(value => {
      this.toggleSidebar(value);
    });
  }

  public items = [
    {"icon": "home", "text": "Inicio", "link": "/inicio"},
    {"icon": "view_list", "text": "Lista de productos", "link": "/productos"},
    {"icon": "add", "text": "Añadir producto", "link": "/anadir"},
    {"icon": "info", "text": "Acerca de", "link": "/about"},
  ];

  public display = "block";

  toggleSidebar(value) {
    if(value) {
      this.display = "block";
    }
    else {
      this.display = "none";
    }
  }
}
