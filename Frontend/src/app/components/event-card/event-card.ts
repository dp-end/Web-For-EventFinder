import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Yönlendirme için eklendi

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css'
})
export class EventCard {
  @Input() event: any;

  constructor(private router: Router) {} // Router'ı sisteme tanıttık

  goToDetail() {
    if (this.event && this.event.id) {
      // Tıklandığında /event/1 gibi bir yola gider
      this.router.navigate(['/event', this.event.id]);
    }
  }
}
