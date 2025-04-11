import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatListModule,RouterLink], 
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
