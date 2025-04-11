import { Component, OnInit } from '@angular/core';
import { champaranya } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-champaranya',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './champaranya.component.html',
  styleUrl: './champaranya.component.css'
})
export class ChamparanyaComponent implements OnInit{
  allData:champaranya[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getchamparanya().subscribe((result)=>{
    this.allData=result;
    console.log(this.allData);
  })
 }
}


