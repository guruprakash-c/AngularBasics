import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss'
})
export class ReactiveForms {
  registrationForm: FormGroup;
  isFormValid = false;
  constructor(private _fb: FormBuilder) {
    this.registrationForm = this._fb.group({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      rememberMe: new FormControl(true)
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value, this.registrationForm.invalid);
  }
}
