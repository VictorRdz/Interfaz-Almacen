import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { 
    this.sidebarStatus.subscribe((value) => {
      this.isOpen = value;
    });
  }

  public sidebarStatus: Subject<boolean> = new Subject<boolean>();
  public isOpen = true;

  toggleSidebar() {
    this.sidebarStatus.next(!this.isOpen);
  }
}
