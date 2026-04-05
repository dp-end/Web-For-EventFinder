import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// EventCard'ın yolunu kendi projene göre kontrol et (sonunda .component olmayabilir)
import { EventCard } from '../../event-card/event-card';

@Component({
  selector: 'app-club-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, EventCard],
  templateUrl: './clup-details.html',
  styleUrl: './clup-details.css'
})
export class ClupDetails {

  // Takip etme durumu ve aktif sekme
  isFollowing: boolean = false;
  activeTab: 'events' | 'about' = 'events';

  // Kulüp Bilgileri
  club = {
    name: 'Bilgisayar Topluluğu',
    initials: 'BT',
    category: 'Teknoloji',
    coverUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    followerCount: 1850,
    eventCount: 24,
    description: 'Akdeniz Üniversitesi bünyesinde yazılım, yapay zeka, siber güvenlik ve oyun geliştirme alanlarında etkinlikler düzenleyen en aktif teknoloji topluluğu.',
    president: 'Mert Osman Ayhan',
    advisor: 'Prof. Dr. Ahmet Yılmaz',
    instagram: '@akdeniz_bt',
    linkedin: 'Akdeniz Üniversitesi Bilgisayar Topluluğu'
  };

  // Kulübe Ait Etkinlikler
  clubEvents = [
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
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      price: '₺50',
      clubInitials: 'BT',
      clubName: 'Bilgisayar Topluluğu',
      title: 'Siber Güvenlik Atölyesi: Etik Hackerlık',
      date: '20 Nisan 2026 - 10:00',
      location: 'Bilgisayar Laboratuvarı',
      likes: 312, comments: 45, shares: 22
    }
  ];

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    if(this.isFollowing) this.club.followerCount++;
    else this.club.followerCount--;
  }

  switchTab(tab: 'events' | 'about') {
    this.activeTab = tab;
  }
}
