import { Component, OnInit } from '@angular/core';
import { achankamar } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-amarkantak',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './amarkantak.component.html',
  styleUrl: './amarkantak.component.css'
})
export class AmarkantakComponent implements OnInit{
  allData:achankamar[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getachankamar().subscribe((result)=>{
    this.allData=result;
  })
 }
}