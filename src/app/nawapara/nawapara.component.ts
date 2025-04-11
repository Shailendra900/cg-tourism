import { Component, OnInit } from '@angular/core';
import { barnawapara } from '../datatypes';
import { ServicesService } from '../service/services.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-nawapara',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './nawapara.component.html',
  styleUrl: './nawapara.component.css'
})
export class NawaparaComponent implements OnInit{
  allNawa:barnawapara[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getbarnawapara().subscribe((result)=>{
    this.allNawa=result;
    console.log(this.allNawa);
  })
 } 
}

