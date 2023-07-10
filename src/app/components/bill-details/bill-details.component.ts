import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillsService } from 'src/app/bills.service';
import { Weights } from 'src/app/weights';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
        //console.log(billDetails.objectsArray_1.length)
      },
      (error: any) => {
        console.error('Error fetching bill details:', error);
      }
    );
  }

  generatePDF(){
    const element = document.getElementById('bill-details');
    if(element){
      html2canvas(element).then((canvas)=>{
        const pdf = new jsPDF.jsPDF();
        const imgData = canvas.toDataURL('image/png');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('bill.pdf');
      })
    }
  }

}
