import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadrComponent } from './headr/headr.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadrComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cg-tourism';
}
