import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';

// custom synchronous validator: password must include '?'
function hasPasswordIncludeQ(control: AbstractControl) {
  const value = control.value as string;
  if (!value) return { required: true };
  return value.includes('?') ? null : { invalidPassword: true };
}

// async validator: checks if the email is already used
function invalidEmail(control: AbstractControl) {
  const value = control.value as string;
  const usedEmail = 'khadearjun@gmail.com';
  return of(value === usedEmail ? { invalidEmail: true } : null);
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required], [invalidEmail]),
    password: new FormControl('', [Validators.required, hasPasswordIncludeQ]),
  });

  onSubmit() {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    console.log(this.loginForm);
  }

  get IsInvalidEmail(): boolean {
    return (
      this.loginForm.controls.email.touched &&
      this.loginForm.controls.email.dirty &&
      this.loginForm.controls.email.invalid
    );
  }

  get IsPasswordInvalid(): boolean {
    return (
      this.loginForm.controls.password.touched &&
      this.loginForm.controls.password.dirty &&
      this.loginForm.controls.password.invalid
    );
  }
}
