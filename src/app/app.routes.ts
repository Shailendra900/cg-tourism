import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllTourPlaceComponent } from './all-tour-place/all-tour-place.component';
import { HomeComponent } from './home/home.component';
import { RaipurComponent } from './raipur/raipur.component';
import { GangrelComponent } from './gangrel/gangrel.component';
import { SirpurComponent } from './sirpur/sirpur.component';
import { RajimComponent } from './rajim/rajim.component';
import { NawaparaComponent } from './nawapara/nawapara.component';
import { ChamparanyaComponent } from './champaranya/champaranya.component';
import { ChitrakoteComponent } from './chitrakote/chitrakote.component';
import { TirathgarhComponent } from './tirathgarh/tirathgarh.component';
import { BhoramdeoComponent } from './bhoramdeo/bhoramdeo.component';
import { DongargarhComponent } from './dongargarh/dongargarh.component';
import { RatanpurComponent } from './ratanpur/ratanpur.component';
import { TalaComponent } from './tala/tala.component';
import { AmarkantakComponent } from './amarkantak/amarkantak.component';
import { GirodpuriComponent } from './girodpuri/girodpuri.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { BasterComponent } from './baster/baster.component';
import { MadkuDeepComponent } from './madku-deep/madku-deep.component';
import { KargerVellyComponent } from './karger-velly/karger-velly.component';

export const routes: Routes = [
    {path:'', 
        children:[
            {path:'',component:HomeComponent, title:'Home Page'},
            {path:'all-tour/raipur', component:RaipurComponent},
            {path:'all-tour/gangrel', component:GangrelComponent},
            {path:'all-tour/sirpur', component:SirpurComponent},
            {path:'all-tour/rajim',component:RajimComponent},
        ]
        },
    {path:'about', component:AboutComponent, title:'About'},      
    {path:'all-tour', 
        children:[
            {path:'', component:AllTourPlaceComponent,title:'All-Tour-Place'},
            {path:'all-tour/raipur', component:RaipurComponent},
            {path:'all-tour/gangrel', component:GangrelComponent},
            {path:'all-tour/sirpur', component:SirpurComponent},
            {path:'all-tour/rajim',component:RajimComponent},
            {path:'all-tour/nawapara', component:NawaparaComponent},
            {path:'all-tour/champaranya', component:ChamparanyaComponent},
            {path:'all-tour/chitrakote', component:ChitrakoteComponent},
            {path:'all-tour/tirathgarh', component:TirathgarhComponent},
            {path:'all-tour/bhoramdeo', component:BhoramdeoComponent},
            {path:'all-tour/dongargarh', component:DongargarhComponent},
            {path:'all-tour/ratanpur', component:RatanpurComponent},
            {path:'all-tour/tala',component:TalaComponent},
            {path:'all-tour/amarkantak', component:AmarkantakComponent},
            {path:'all-tour/girodpuri',component:GirodpuriComponent},
            {path:'all-tour/mainpart', component:MainpartComponent},
            {path:'all-tour/baster',component:BasterComponent},
            {path:'all-tour/madku-deep',component:MadkuDeepComponent},
            {path:'all-tour/kanger-valley', component:KargerVellyComponent},
            
        ]
        }
];
