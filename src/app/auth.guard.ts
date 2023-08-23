import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BillsService } from './bills.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private bs: BillsService, private router:Router){}

  canActivate(): boolean{
    
    if(this.bs.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
