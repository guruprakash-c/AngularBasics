import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {
  title:string = `Angular ${VERSION.full} Basics`;
}
