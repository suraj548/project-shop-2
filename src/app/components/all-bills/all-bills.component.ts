import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/bills.service';
import { Weights } from 'src/app/weights';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {
 
  public bills: Array<Weights> | undefined
  
  constructor(private router:Router ,public billList:BillsService) { }

  ngOnInit(): void {
    this.billList.getBills().subscribe((all)=>{
      this.bills=all
      //console.log(this.bills)
 
    },error=>{
      if(error.status === 401){
        alert("Unauthorized request! Please Login")
        this.router.navigate(['/login'])
      }
      else{console.log(error)}
    })
  }


  onBillNumberClick(billNumber: string) {
    this.router.navigate(['/bill-details'], { queryParams: { billNumber: billNumber } })
  }

}
