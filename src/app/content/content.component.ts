import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { SidebarService } from '../services/sidebar.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() { 
    this._sidebarService.sidebarStatus.subscribe(value => {
      this.updateMargin(value);
    });
  }

  public margin = "0 0 0 250px";

  updateMargin(value) {
    if(value) {
      this.margin = "0 0 0 250px";
    }
    else {
      this.margin = "0 5vw 0 5vw";
    }
  }
}
