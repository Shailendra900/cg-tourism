import { Component, OnInit } from '@angular/core';
import { raipur } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from "../list/list.component";
import { HeaderForAllComponent } from '../header-for-all/header-for-all.component';

@Component({
  selector: 'app-raipur',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './raipur.component.html',
  styleUrl: './raipur.component.css'
})
export class RaipurComponent implements OnInit{
  allRaipur:raipur[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getraipur().subscribe((result)=>{
    this.allRaipur=result;
    console.log(this.allRaipur);
  })
 }
 
}
