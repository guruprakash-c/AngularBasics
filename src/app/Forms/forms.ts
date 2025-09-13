import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms',
  template: `
          <h3>Forms</h3>
          <router-outlet/>
            `,
  styles: '',
  imports: [RouterOutlet]
})
export class FormsComponent {

}
