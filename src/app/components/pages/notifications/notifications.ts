import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  // Bildirim verilerimiz (Görseldeki gibi okunmuş/okunmamış durumları var)
  notifications = [
    {
      id: 1,
      type: 'event', // Etkinlik ikonu için
      title: 'Yeni Etkinlik',
      message: 'Bilgisayar Topluluğu yeni bir etkinlik paylaştı.',
      time: '5 dk önce',
      isRead: false // Okunmadı (Mavi arka plan)
    },
    {
      id: 2,
      type: 'like', // Beğeni ikonu için
      title: 'Beğenildi',
      message: 'Paylaşımınız 15 kişi tarafından beğenildi.',
      time: '1 saat önce',
      isRead: false
    },
    {
      id: 3,
      type: 'comment', // Yorum ikonu için
      title: 'Yorum',
      message: 'Ali Yılmaz etkinliğinize yorum yaptı.',
      time: '3 saat önce',
      isRead: true // Okundu (Beyaz arka plan)
    },
    {
      id: 4,
      type: 'info', // Bilgi/Hatırlatma ikonu için
      title: 'Hatırlatma',
      message: 'Bahar Konseri yarın başlıyor!',
      time: '6 saat önce',
      isRead: true
    },
    {
      id: 5,
      type: 'event',
      title: 'Yeni Etkinlik',
      message: 'Spor Topluluğu basketbol turnuvası düzenliyor.',
      time: '1 gün önce',
      isRead: true
    }
  ];

  // Tümünü okundu işaretleme fonksiyonu
  markAllAsRead() {
    this.notifications.forEach(notif => notif.isRead = true);
  }
}
