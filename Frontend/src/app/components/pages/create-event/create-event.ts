import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Form işlemleri için gerekli

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './create-event.html',
  styleUrl: './create-event.css'
})
export class CreateEvent {

  // Ana sayfadaki kategorilerle eşleşen liste
  categories: string[] = ['Spor', 'Teknoloji', 'Müzik', 'Sanat', 'Bilim', 'Kültür', 'Sosyal', 'Kariyer'];

  // Seçilen resmin adını tutmak için
  selectedFileName: string = '';

  // Dosya seçildiğinde çalışacak fonksiyon
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    }
  }

  // Form gönderildiğinde (Yükle butonuna basılınca) çalışacak fonksiyon
  onSubmit() {
    console.log('Etkinlik oluşturma isteği gönderildi!');
    alert('Harika! Etkinlik başarıyla oluşturuldu.');
    // İleride burada veritabanına kayıt işlemi yapacağız
  }
}
