import { Component, EventEmitter, Output } from '@angular/core';
import { sidebarData } from './sidebar-data';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  collapsed = false;
  screenWidth = 0;
  sideData = sidebarData

  toggleCollapse(): void{
    this.collapsed= !this.collapsed
  }

  closeSidebar(): void{
    this.collapsed = false
  }
}
