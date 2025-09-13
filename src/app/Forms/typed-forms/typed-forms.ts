import { Component, Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  imports: [FormsModule],
  templateUrl: './typed-forms.html',
  styleUrl: './typed-forms.scss'
})
export class TypedFormsComponent {
  register = new UntypedFormGroup({
    fullName: new UntypedFormControl('DEVstoc'),
    email: new UntypedFormControl('hi@devstoc.com',{ nonNullable: true})
  });
  OnSubmit(){
    const fName = this.register.controls['fullName'].value;
    const eMail = this.register.controls['email'].value; 
    alert(`Name: ${fName} & e-Mail: ${eMail}`);
  }
}
