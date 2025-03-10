import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeadrComponent } from './headr/headr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cg-tourism';
}
