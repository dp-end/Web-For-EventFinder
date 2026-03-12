import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showSidebar: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        // Sidebar'ın KESİNLİKLE görünmemesi gereken sayfaların listesi
        const hiddenPages = [
          '/login',
          '/register',
          '/register-selection',
          '/register-club',
          '/register-student'
        ];

        // Gidilen adres (event.url) bu listede var mı diye bakıyoruz.
        // Varsa showSidebar 'false' olur, yoksa 'true' olur.
        this.showSidebar = !hiddenPages.includes(event.url);
      }
    });
  }
}
