import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./auth/auth.component')
},
{
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
        {
            path: 'home',
            title:'Home',
            loadComponent: () => import('./dashboard/pages/home/home.component')

        },
        {
            path: 'profile',
            title:'Profile',
            loadComponent: () => import('./dashboard/pages/profile/profile.component')

        },
          {
            path : '',
            redirectTo: 'home',
            pathMatch: 'full'
          }

          
        ,

    ]
    

}




,
{
    path : '',
    redirectTo: '/login',
    pathMatch: 'full'
}
];

