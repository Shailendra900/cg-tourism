import { Component, OnInit } from '@angular/core';
import { rajim } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-rajim',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './rajim.component.html',
  styleUrl: './rajim.component.css'
})
export class RajimComponent  implements OnInit{
  allRajim:rajim[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getrajim().subscribe((result)=>{
    this.allRajim=result;
  })
 }
 
}
