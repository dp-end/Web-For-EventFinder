import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar';; // Klasör yolunu kontrol et

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = false;

  // Servisi (Postacıyı) içeri alıyoruz
  constructor(private sidebarService: SidebarService) {}

  // Component ekrana yüklendiği an servisi dinlemeye başlıyoruz
  ngOnInit() {
    this.sidebarService.isSidebarOpen$.subscribe(durum => {
      this.isOpen = durum; // Servisten gelen duruma göre isOpen true veya false olacak
    });
  }

  // Menüyü dışarıdan kapatmak için kullanacağımız fonksiyon
  closeMenu() {
    this.sidebarService.closeSidebar();
  }
}
