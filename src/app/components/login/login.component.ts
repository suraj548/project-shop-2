import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/bills.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public bs:BillsService, private router:Router) { }
 
  ngOnInit(): void {
  }

  OnLogin(): void{
    
    this.bs.login(this.bs.creds).subscribe(
      data=>{
        if(data){
          localStorage.setItem('token',data.token)
          alert('login sucessfull')
        }
      },
      error=>{
        if(error.status === 401){
          alert("Wrong password or username")
          //this.resetForm()
        }
        if(error.status === 404){
          alert("user doesnot exists")
          
        }
        if(error.status === 500){
        alert("Server down try again later")
        console.log(error)
        }
      }
    )

  }

}
