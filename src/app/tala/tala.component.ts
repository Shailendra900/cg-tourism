import { Component, OnInit } from '@angular/core';
import { tala } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-tala',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './tala.component.html',
  styleUrl: './tala.component.css'
})
export class TalaComponent implements OnInit{
  allData:tala[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.gettala().subscribe((result)=>{
    this.allData=result;
  })
 }
}
