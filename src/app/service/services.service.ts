import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map, Observable } from 'rxjs';
import { achankamar, barnawapara, baster, bhoramdeo, champaranya, chitrakote, dongargarh, gangrel, girodhpuri, kanger, madku, mainpat, raipur, rajim, ratanpur, sirpur, tala, tirathgarh } from '../datatypes';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http:HttpClient) { }

  getraipur():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.raipur)
    );
  }
  getgangrel():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.gangrel)
    );
  }
 
  getsirpur():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.sirpur)
    );
  }
  getrajim():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.rajim)
    );
  }
  getbarnawapara():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.barnawapara)
    );
  }
  getchamparanya():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.champaranya)
    );
  }
  getchitrakote():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.chitrakote)
    );
  }
  gettirathgarh():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.tirathgarh)
    );
  }
  getbhoramdeo():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.bhoramdeo)
    );
  }
  getdongargarh():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.dongargarh)
    );
  }
  getratanpur():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.ratanpur)
    );
  }
  gettala():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.tala)
    );
  }
  getachankamar():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.achankamar)
    );
  }
  getgirodhpuri():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.girodhpuri)
    );
  }
  getmainpat():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.mainpat)
    );
  }
  getbaster():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.baster)
    );
  }
  getmadku():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.madku)
    );
  }
  getkanger():Observable<any[]>{
    return this.http.get<any>("https://sskkys.github.io/db.json/db.json").pipe(
      map(data => data.kanger)
    );
  }
}
