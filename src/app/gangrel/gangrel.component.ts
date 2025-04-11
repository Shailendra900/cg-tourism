import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ServicesService } from '../service/services.service';
import { gangrel } from '../datatypes';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-gangrel',
  standalone: true,
  imports: [CommonModule, ListComponent,FormsModule],
  templateUrl: './gangrel.component.html',
  styleUrl: './gangrel.component.css',
  preserveWhitespaces:true,
})
export class GangrelComponent implements OnInit{
  Allgangrel:gangrel[]|undefined;
constructor(private service:ServicesService){}

ngOnInit(): void {
  this.service.getgangrel().subscribe((result)=>{
    this.Allgangrel=result;
  })
 }
 
}

