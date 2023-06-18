import { Component, OnInit } from '@angular/core';
import { BillsService } from 'src/app/bills.service';
import { Weights } from 'src/app/weights';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {
 
  public bills: Array<Weights> | undefined
  constructor(public billList:BillsService) { }

  ngOnInit(): void {
    this.billList.getBills().subscribe((all)=>{
      this.bills=all
      console.log(all)
    },error=>{
      console.log(error)
    })
  }

}
