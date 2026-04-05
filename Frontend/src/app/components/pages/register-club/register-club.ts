import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register-club',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register-club.html',
  styleUrl: './register-club.css',
})
export class RegisterClub {
  clubForm: FormGroup;
  showPassword = false;

  // Örnek Üniversite Listesi
  universities = ['Akdeniz Üniversitesi', 'İstanbul Teknik Üniversitesi', 'ODTÜ', 'Boğaziçi Üniversitesi'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.clubForm = this.fb.group({
      clubName: ['', [Validators.required, Validators.minLength(3)]],
      clubEmail: ['', [Validators.required, Validators.email]],
      advisorName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      referenceNumber: ['', Validators.required],
      university: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/)
      ]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.clubForm.valid) {
      console.log('Kulüp Kaydı Verisi:', this.clubForm.value);
      this.router.navigate(['/login']);
    } else {
      this.clubForm.markAllAsTouched();
    }
  }

  goBack() {
    window.history.back();
  }
}
