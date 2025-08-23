import { Component } from '@angular/core';
import { ReactiveForms } from "./Reactive/reactive-forms/reactive-forms";

@Component({
  selector: 'app-forms',
  template: `
          <h3>Forms</h3>
          <app-reactive-forms></app-reactive-forms>
            `,
  styles: '',
  imports: [ReactiveForms]
})
export class FormsComponent {

}
