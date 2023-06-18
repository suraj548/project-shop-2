import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'
import { Weights } from './weights';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  BASE_URL='http://localhost:3000/route'

  constructor(private http: HttpClient) { }


  getBills():Observable<Weights[]>{  
    console.log("hi")
    return this.http.get<Weights[]>(this.BASE_URL+'/all-bills')
  }
}
