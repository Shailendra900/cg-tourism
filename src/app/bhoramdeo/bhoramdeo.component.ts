import { Component, OnInit } from '@angular/core';
import { bhoramdeo } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-bhoramdeo',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './bhoramdeo.component.html',
  styleUrl: './bhoramdeo.component.css'
})
export class BhoramdeoComponent implements OnInit{
  allData:bhoramdeo[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getbhoramdeo().subscribe((result)=>{
    this.allData=result;
    console.log(this.allData);
  })
 }
}