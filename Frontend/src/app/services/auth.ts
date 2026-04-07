import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Backend'in çalıştığı o güvenli adres (Port 9001)
  private apiUrl = 'https://localhost:9001/api/Account';
  private userNameSubject = new BehaviorSubject<string | null>(this.loadUserName());
  userName$ = this.userNameSubject.asObservable();

  constructor(private http: HttpClient) { }

  // GİRİŞ YAPMA (Login) FONKSİYONU
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, credentials);
  }

  // YENİ EKLENEN KAYIT OLMA (Register) FONKSİYONU
  register(userData: any): Observable<any> {
    // Sonuna { responseType: 'text' } ekliyoruz ki Angular düz metin gelirse çıldırmasın :)
    return this.http.post(`${this.apiUrl}/register`, userData, { responseType: 'text' });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    const tokenName = this.fetchUserNameFromToken(token);
    if (tokenName) {
      this.setUserName(tokenName);
    }
  }

  setUserName(userName: string | null): void {
    if (userName) {
      localStorage.setItem('userName', userName);
    } else {
      localStorage.removeItem('userName');
    }
    this.userNameSubject.next(userName);
  }

  getCurrentUserName(): string | null {
    return localStorage.getItem('userName') || this.fetchUserNameFromToken(localStorage.getItem('token') || '');
  }

  private loadUserName(): string | null {
    return localStorage.getItem('userName');
  }

  private fetchUserNameFromToken(token: string): string | null {
    if (!token) {
      return null;
    }
    const payload = this.parseJwtPayload(token);
    if (!payload) {
      return null;
    }
    return payload.name || payload.unique_name || payload.email || payload.sub || null;
  }

  private parseJwtPayload(token: string): any | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return null;
      }
      const decoded = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decoded);
    } catch {
      return null;
    }
  }
}

