import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillsService } from 'src/app/bills.service';
import { Weights } from 'src/app/weights';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  public selectedBillDetails: Weights | undefined
  constructor(private route: ActivatedRoute, private billService: BillsService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      const billNumber = params['billNumber'];
      if (billNumber) {
        this.loadBillDetails(billNumber);
      }
    })
  }
 
  loadBillDetails(billNumber: string) {
    this.billService.getOneBill(billNumber).subscribe(
      (billDetails) => {
        this.selectedBillDetails=billDetails
        console.log(billDetails.objectsArray_1.length)
      },
      (error: any) => {
        console.error('Error fetching bill details:', error);
      }
    );
  }

}
