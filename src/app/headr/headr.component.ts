import { Component } from '@angular/core';
import {  RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-headr',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './headr.component.html',
  styleUrl: './headr.component.css'
})
export class HeadrComponent {

}
