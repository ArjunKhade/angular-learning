import { CommonModule } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  private form = viewChild.required<NgForm>('Loginform');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedform = window.localStorage.getItem('saved-form');

      if (savedform) {
        const data = JSON.parse(savedform);
        const savedEmail = data.email;
        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1);
      }

      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) => {
            window.localStorage.setItem('saved-form', JSON.stringify({ email: value.email }));
          },
        });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;
    console.log(formData.form.value.email);
    console.log(formData.form.value.password);
    console.log(formData.form);

    formData.form.reset();
  }
}
