import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrls: ["./side-menu.css"],
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {

  public menuItems = routes
  .map((route) => route.children ?? [])
  .flat()
  .filter((route) => route && route.path)
  .filter((route) => !route.path?.includes(':'));

  sidebarVisible: boolean = true;



  constructor() {

  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }



}
