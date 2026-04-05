import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth';
AuthService // Yolu kendi klasör yapına göre ayarla!

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string = ''; // Backend'den dönen hataları (yanlış şifre vb.) ekranda göstermek için

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // API ile konuşacak garsonumuzu içeri aldık
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/)
      ]]
    });
  }

  onSubmit() {
    // Her yeni butona basıldığında eski hatayı ekrandan temizle
    this.errorMessage = '';

    if (this.loginForm.valid) {
      console.log('Giriş Denemesi API ye gönderiliyor...', this.loginForm.value);

      // Gerçek API İsteği:
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Giriş Başarılı! Gelen Cevap:', response);

          // API'den gelen JWT Token'ı tarayıcının hafızasına (LocalStorage) kaydediyoruz
          // Not: Clean Architecture şablonunda token genelde response.data.jwToken içinde döner
          const token = response.data?.jwToken || response.jwToken;
          if (token) {
            localStorage.setItem('token', token);
          }

          // Giriş başarılıysa Home sayfasına yönlendir!
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Backend Hatası:', err);
          // Kullanıcıya şık bir hata mesajı göster
          this.errorMessage = 'E-posta veya şifre hatalı. Lütfen tekrar deneyin.';
        }
      });

    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
