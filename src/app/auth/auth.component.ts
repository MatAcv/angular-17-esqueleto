import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import DashboardComponent from '../dashboard/dashboard.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, RouterModule, DashboardComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

  public menuItems = routes;

  public router = inject( Router );

  /**
   *
   */
  constructor() {
    console.log(this.menuItems);    
  }

  login(): void {
    console.log('Navigating to dashboard...');
    this.router.navigateByUrl('/dashboard');

}

}
