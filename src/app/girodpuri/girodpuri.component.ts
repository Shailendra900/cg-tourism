import { Component, OnInit } from '@angular/core';
import { girodhpuri } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-girodpuri',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './girodpuri.component.html',
  styleUrl: './girodpuri.component.css'
})
export class GirodpuriComponent implements OnInit{
  allData:girodhpuri[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getgirodhpuri().subscribe((result)=>{
    this.allData=result;
  })
 }
}
