import { Component, Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './typed-forms.html',
  styleUrl: './typed-forms.scss'
})
export class TypedFormsComponent {
  register:UntypedFormGroup = new UntypedFormGroup({
    fullName: new UntypedFormControl(''),
    email: new UntypedFormControl('',{ nonNullable: true})
  });
  OnSubmit(){
    if(!this.register.valid) return;
    const fName = this.register.controls['fullName'].value;
    const eMail = this.register.controls['email'].value; 
    alert(`Name: ${fName} & e-Mail: ${eMail}`);
    this.register.reset();
  }
}
