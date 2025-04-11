import { Component, OnInit } from '@angular/core';
import { mainpat } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-mainpart',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './mainpart.component.html',
  styleUrl: './mainpart.component.css'
})
export class MainpartComponent implements OnInit{
  allData:mainpat[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getmainpat().subscribe((result)=>{
    this.allData=result;
  })
 }
}
