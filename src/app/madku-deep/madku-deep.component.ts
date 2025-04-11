import { Component, OnInit } from '@angular/core';
import { madku } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-madku-deep',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './madku-deep.component.html',
  styleUrl: './madku-deep.component.css'
})
export class MadkuDeepComponent implements OnInit{
  allData:madku[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getmadku().subscribe((result)=>{
    this.allData=result;
  })
 }
}
