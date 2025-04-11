import { Component, OnInit } from '@angular/core';
import { dongargarh } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-dongargarh',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './dongargarh.component.html',
  styleUrl: './dongargarh.component.css'
})
export class DongargarhComponent implements OnInit{
  allData:dongargarh[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getdongargarh().subscribe((result)=>{
    this.allData=result;
  })
 }
}