import { Component, OnInit } from '@angular/core';
import { ratanpur } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-ratanpur',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './ratanpur.component.html',
  styleUrl: './ratanpur.component.css'
})
export class RatanpurComponent implements OnInit{
  allData:ratanpur[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getratanpur().subscribe((result)=>{
    this.allData=result;
  })
 }
}