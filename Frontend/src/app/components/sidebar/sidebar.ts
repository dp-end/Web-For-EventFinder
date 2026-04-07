import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = false;
  userName: string = '';

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.sidebarService.isSidebarOpen$.subscribe(durum => {
      this.isOpen = durum;
    });

    this.userName = this.authService.getCurrentUserName() || '';
    this.authService.userName$.subscribe(name => {
      this.userName = name || '';
    });
  }

  closeMenu() {
    this.sidebarService.closeSidebar();
  }
}
