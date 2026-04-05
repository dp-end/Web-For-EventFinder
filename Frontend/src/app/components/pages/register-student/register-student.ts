import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// AbstractControl eklendi (Validator için gerekli)
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; // Router importu buraya eklendi

@Component({
  selector: 'app-register-student',
  // FormBuilder ve Validators buradan çıkarıldı (Hatanın ana sebebi buydu)
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register-student.html',
  styleUrl: './register-student.css',
})
export class RegisterStudent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      university: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator }); // Angular standartlarında validator -> validators olarak yazılır
  }

  // Eksik olan Şifre Eşleşme Kontrolü Fonksiyonu eklendi
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    // Şifreler eşleşmiyorsa confirmPassword alanına 'mismatch' hatası basıyoruz
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Kayıt başarılı:', this.studentForm.value);
      // Kayıt işlemi başarılıysa giriş sayfasına yönlendir
      this.router.navigate(['/login']);
    } else {
      console.log('Form hatalı, kurallara uyulmamış.');
      // Kullanıcıya hataları göstermek için tüm alanları "dokunulmuş" olarak işaretler
      this.studentForm.markAllAsTouched();
    }
  }
  // register-student.component.ts içine ekle

goBack() {
  // Eğer sadece bir önceki sayfaya dönmek istiyorsan:
  window.history.back();

  // VEYA daha kontrollü bir şekilde seçim ekranına dönmek istiyorsan:
  // this.router.navigate(['/register']);
}
}
