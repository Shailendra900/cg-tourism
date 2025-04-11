import { Component, OnInit } from '@angular/core';
import { tirathgarh } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-tirathgarh',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './tirathgarh.component.html',
  styleUrl: './tirathgarh.component.css'
})
export class TirathgarhComponent implements OnInit{
  allData:tirathgarh[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.gettirathgarh().subscribe((result)=>{
    this.allData=result;
    console.log(this.allData);
  })
 }
}