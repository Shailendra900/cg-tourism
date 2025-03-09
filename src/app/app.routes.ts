import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllTourPlaceComponent } from './all-tour-place/all-tour-place.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, title:'Home Page'},
    {path:'about', component:AboutComponent, title:'About'},
    {path:'all-tour', component:AllTourPlaceComponent,title:'All-Tour-Place'}
];
