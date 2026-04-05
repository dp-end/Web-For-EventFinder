import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-tickets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css' // Dosya adlarına dikkat et, sendekiyle eşleşsin
})
export class Tickets {

  // Prototipindeki verilere uygun bilet listesi
  tickets = [
    {
      id: 'QR001',
      title: 'Yapay Zeka ve Gelecek Konferansı',
      date: '15 Mart 2026',
      time: '14:00',
      location: 'Konferans Salonu A',
      status: 'Aktif',
      statusType: 'active' // CSS'te yeşil renk vermek için
    },
    {
      id: 'QR002',
      title: 'Bahar Konseri - Kampüs Fest',
      date: '22 Mart 2026',
      time: '18:00',
      location: 'Amfi Tiyatro',
      status: 'Aktif',
      statusType: 'active'
    },
    {
      id: 'QR003',
      title: 'Startup Weekend Antalya',
      date: '5 Nisan 2026',
      time: '09:00',
      location: 'İnovasyon Merkezi',
      status: 'Aktif',
      statusType: 'active'
    },
    {
      id: 'QR004',
      title: 'Geçmiş Tiyatro Oyunu',
      date: '10 Şubat 2026',
      time: '20:00',
      location: 'Kültür Merkezi',
      status: 'Kullanıldı',
      statusType: 'used' // Geçmiş etkinlikler için gri/pasif renk verebiliriz
    }
  ];

  viewTicket(ticketId: string) {
    console.log(ticketId + ' numaralı bilet açılıyor...');
    // İleride buraya tıklanınca kocaman bir QR kod açılan bir Modal (Popup) ekleyebiliriz!
  }
}
