import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BillsService } from './bills.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private bs:BillsService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
      
    let tokenizedRequest=req.clone({
        
        setHeaders:{
          Authorization:`Bearer ${this.bs.getToken()}`
        }
      })
      return next.handle(tokenizedRequest)
  }
}
