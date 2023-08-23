import { Injectable } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'
import { Weights } from './weights';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class BillsService {

  BASE_URL='http://localhost:3000/route'
  creds:{ username: string; password: string }
  
  constructor(private http: HttpClient, private router:Router) { 
    this.creds = {username: "", password: ""}
  }


  login(user:{username:string, password:string}){
    let a =  this.http.post<{token:string}>(this.BASE_URL+'/login', user)
    return a
  }
 
  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  getBills():Observable<Weights[]>{  
    console.log("hi")
    return this.http.get<Weights[]>(this.BASE_URL+'/all-bills')
  }

  getOneBill(bill_no: string):Observable<Weights>{
    console.log("hi2")
    const params = new HttpParams().set('bill_no', bill_no);
    return this.http.get<Weights>(this.BASE_URL+'/bills',{ params })
  }


  addBill(billData: any): Observable<string> {
    console.log("hi3")
    return this.http.post<string>(`${this.BASE_URL}/bills`, billData);
  }

  loggedIn(){
    return !!localStorage.getItem('token') 
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
