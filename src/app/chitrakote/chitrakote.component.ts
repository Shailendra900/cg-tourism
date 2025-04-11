import { Component, OnInit } from '@angular/core';
import { chitrakote } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-chitrakote',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './chitrakote.component.html',
  styleUrl: './chitrakote.component.css'
})
export class ChitrakoteComponent implements OnInit{
  allData:chitrakote[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getchitrakote().subscribe((result)=>{
    this.allData=result;
    console.log(this.allData);
  })
 }
}
