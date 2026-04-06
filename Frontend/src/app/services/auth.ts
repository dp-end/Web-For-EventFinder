import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Backend'in çalıştığı o güvenli adres (Port 9001)
  private apiUrl = 'https://localhost:9001/api/Account';

  constructor(private http: HttpClient) { }

  // GİRİŞ YAPMA (Login) FONKSİYONU
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, credentials);
  }

  // YENİ EKLENEN KAYIT OLMA (Register) FONKSİYONU
  // YENİ EKLENEN KAYIT OLMA (Register) FONKSİYONU
  register(userData: any): Observable<any> {
    // Sonuna { responseType: 'text' } ekliyoruz ki Angular düz metin gelirse çıldırmasın :)
    return this.http.post(`${this.apiUrl}/register`, userData, { responseType: 'text' });
  }
}
