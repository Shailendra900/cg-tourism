import { Component, OnInit } from '@angular/core';
import { kanger } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-karger-velly',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './karger-velly.component.html',
  styleUrl: './karger-velly.component.css'
})
export class KargerVellyComponent implements OnInit{
  allData:kanger[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getkanger().subscribe((result)=>{
    this.allData=result;
  })
 }
}
