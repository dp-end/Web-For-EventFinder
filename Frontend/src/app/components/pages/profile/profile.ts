import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// EventCard'ı içeri aktarıyoruz (Klasör yolunu kendi projene göre kontrol et)
import { EventCard } from '../../event-card/event-card';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, EventCard], // EventCard'ı buraya ekledik!
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile{

  // Profil Sahibi Bilgileri (Görsele birebir uyumlu)
  user = {
    name: 'Mert Osman Ayhan', // Senin adın
    initials: 'MO',
    bio: 'Teknoloji ve müzik tutkunu. Her etkinliğe varım!',
    department: 'Bilgisayar Mühendisliği',
    university: 'Akdeniz Üniversitesi',
    year: '3. Sınıf'
  };

  // Paylaşılan Etkinlikler Listesi (Ana sayfadaki formatın aynısı)
  sharedEvents = [
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
    }
  ];
}
