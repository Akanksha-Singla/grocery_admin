import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { Menus } from '../../../models/menus';
import { AuthService } from '../../../services/auth.service';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatSidenavModule,
    CommonModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  userImageUrl: string = '';

  image!: string;
  adminMenus: Menus[] = [
    {
      label: `Dashboard`,
      redirectURL: '/navbar/dashboard',
      icon: 'dashboard',
    },
    {
      label: 'All-Sellers',
      redirectURL: '/navbar/all-sellers',
      icon: 'check_circle',
    },
   ];
  

  

  
  ngOnInit(): void {
    

  }
  collapsed: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: SnackbarService
  ) { }



  navigateTo(url: string) {
    this.router.navigate([url]);
  }


 

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role_id');
    this.snackBar.showError('Logged out successfully...');
    this.router.navigate(['/']);
  }


}