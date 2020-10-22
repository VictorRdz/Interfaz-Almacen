import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('icon') public icon;
  @Input('text') public text;
  @Input('link') public link;
}
