import { Component, OnInit } from '@angular/core';
import { baster } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-baster',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './baster.component.html',
  styleUrl: './baster.component.css'
})
export class BasterComponent implements OnInit{
  allData:baster[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getbaster().subscribe((result)=>{
    this.allData=result;
  })
 }
}

