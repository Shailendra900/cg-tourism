import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { sirpur } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-sirpur',
  standalone: true,
  imports: [CommonModule,FormsModule,ListComponent],
  templateUrl: './sirpur.component.html',
  styleUrl: './sirpur.component.css'
})
export class SirpurComponent implements OnInit{
  allsirpur:sirpur[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getsirpur().subscribe((result)=>{
    this.allsirpur=result;
  })
 }
 
}
