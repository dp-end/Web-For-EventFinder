import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router'; // URL'den ID almak için ActivatedRoute ekledik

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css'
})
export class EventDetail implements OnInit {

  eventId: string | null = null;

  // İleride bu veriyi Backend'den çekeceğiz! Şimdilik sahte veri kullanıyoruz.
  event = {
    id: 1,
    title: 'Yapay Zeka ve Gelecek Konferansı',
    clubName: 'Bilgisayar Topluluğu',
    clubInitials: 'BT',
    category: 'Teknoloji',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    date: '15 Mart 2026, Pazar',
    time: '14:00 - 17:00',
    location: 'Mühendislik Fakültesi, Konferans Salonu A',
    price: 'Ücretsiz',
    quota: 250,
    registered: 180,
    description: 'Yapay zekanın geleceği, sektördeki son gelişmeler ve kariyer fırsatları üzerine konuşacağımız bu muazzam konferansa davetlisiniz. Sektörün önde gelen isimleri tecrübelerini paylaşacak ve merak edilen soruları yanıtlayacak. Etkinlik sonunda networking imkanı ve sürpriz çekilişler olacaktır!',
    speakers: ['Dr. Ahmet Yılmaz', 'Ayşe Demir (Senior AI Engineer)'],
    tags: ['Yapay Zeka', 'Kariyer', 'Networking']
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // URL'deki 'id' parametresini yakalıyoruz (Örn: /event/1)
    this.eventId = this.route.snapshot.paramMap.get('id');
    console.log('İncelenen Etkinlik ID:', this.eventId);
  }

  buyTicket() {
    alert('Harika! Biletiniz başarıyla alındı. Biletlerim sayfasından kontrol edebilirsiniz.');
    // İleride burada Backend'e "Bilet Al" (POST) isteği atacağız.
  }
}
