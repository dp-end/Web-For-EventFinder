import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Yönlendirme için EKLENDİ
import { EventCard } from '../../event-card/event-card';
import { SidebarService } from '../../../services/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventCard, RouterModule], // RouterModule EKLENDİ
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  categories: string[] = ['Tümü', 'Spor', 'Teknoloji', 'Müzik', 'Sanat', 'Bilim', 'Kültür', 'Sosyal', 'Kariyer'];
  activeCategory: string = 'Tümü';

  eventsList = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      price: 'Ücretsiz',
      clubInitials: 'BT',
      clubName: 'Bilgisayar Topluluğu',
      title: 'Yapay Zeka ve Gelecek Konferansı',
      date: '15 Mart 2026 - 14:00',
      location: 'Konferans Salonu A',
      likes: 124, comments: 32, shares: 18
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80',
      price: '25 TL',
      clubInitials: 'MT',
      clubName: 'Müzik Topluluğu',
      title: 'Bahar Konseri - Kampüs Fest',
      date: '22 Mart 2026 - 18:00',
      location: 'Amfi Tiyatro',
      likes: 256, comments: 67, shares: 45
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      price: 'Ücretsiz',
      clubInitials: 'GK',
      clubName: 'Girişimcilik Kulübü',
      title: 'Startup Pitch Day',
      date: '28 Mart 2026 - 10:00',
      location: 'İnovasyon Merkezi',
      likes: 89, comments: 12, shares: 5
    }
  ];

  // Kulüplere 'id' EKLENDİ (Tıklayınca hangi sayfaya gideceğini bilmesi için)
  topClubs = [
    { id: 101, rank: 1, name: 'Bilgisayar Topluluğu', initials: 'BT', eventCount: 18, bgColor: '#eef2ff', textColor: '#4f46e5' },
    { id: 102, rank: 2, name: 'Müzik Topluluğu', initials: 'MT', eventCount: 12, bgColor: '#f0f9ff', textColor: '#0284c7' },
    { id: 103, rank: 3, name: 'Spor Topluluğu', initials: 'ST', eventCount: 24, bgColor: '#f5f3ff', textColor: '#7c3aed' }
  ];

  constructor(private sidebarService: SidebarService) {}

  openMenu() {
    this.sidebarService.toggleSidebar();
  }

  selectCategory(category: string) {
    this.activeCategory = category;
  }
}
