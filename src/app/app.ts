import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header-component/header-component";
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule,MatSlideToggleModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
