import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AllSellersComponent } from './views/sellers/all-sellers/all-sellers.component';
import { AuthGuard } from './guards/auth-guards';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'navbar',
    loadComponent: () =>
      import('./shared/components/navbar/navbar.component').then(
        (m) => m.NavbarComponent
      ),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./views/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        canActivate: [AuthGuard],
      },

      {
        path:'all-sellers',
        loadComponent: () =>
          import('./views/sellers/all-sellers/all-sellers.component').then(
            (m) => m.AllSellersComponent
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];
