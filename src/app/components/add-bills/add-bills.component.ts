import { Component, OnInit } from '@angular/core';
import { BillsService } from 'src/app/bills.service';
import { FormsModule } from '@angular/forms';

interface Item {
  numbers: string;
  item_name: string;
  item_price: number;
}

interface Item_2{
  item_name: string;
  item_price: number;
  item_no_bags: number;
}

interface MyObject {
  Fname: string;
  objectsArray: Item[];
  objectsArray_1: Item_2[];
  advance: number;
  vehicle_charge: number
}
 
@Component({
  selector: 'app-add-bills',
  templateUrl: './add-bills.component.html',
  styleUrls: ['./add-bills.component.css']
})
export class AddBillsComponent implements OnInit {
 
  // public weightFlag: boolean = false
  // public packetFlag: boolean = false



  proxy_numbers: string = ''
  proxy_name: string = ''
  proxy_price: number = 0

  proxy_name2: string = ''
  proxy_price2: number = 0
  proxy_no_bags2: number = 0
  

  myObject: MyObject = {
    Fname: '',
    objectsArray: [],
    objectsArray_1: [],
    advance: 0,
    vehicle_charge: 0
  };
  constructor(private billService:BillsService) { }


  addWeight(): void {
    const object1 = { numbers: this.proxy_numbers, item_name: this.proxy_name, item_price: this.proxy_price }
    this.myObject.objectsArray.push(object1);
    this.resetobj()
  }

  resetobj(){
    this.proxy_numbers=''
    this.proxy_name=''
    this.proxy_price=0
  }

  removeWeight(index: number): void {
    this.myObject.objectsArray.splice(index, 1);
  }

  addPacket(): void{
    const object2 = { item_name: this.proxy_name2, item_price: this.proxy_price2, item_no_bags:this.proxy_no_bags2 }
    this.myObject.objectsArray_1.push(object2)
    this.resetobj2()
  }

  removePacket(index: number): void{
    this.myObject.objectsArray_1.splice(index,1)
  }


  resetobj2(){
    this.proxy_name2=''
    this.proxy_price2=0
    this.proxy_no_bags2=0
  }

  submitBillForm(): void {
    let processedData
    let processedData_1

    if(this.myObject.objectsArray.length>0){
      processedData=this.myObject.objectsArray.map((obj)=>{
        const numbers = obj.numbers.split(',').map(Number)
        const item_name = obj.item_name
        const item_price = obj.item_price 

        return {
          numbers: numbers,
          item_name: item_name,
          item_price: item_price
        }
      })
    }

    if(this.myObject.objectsArray_1.length>0){
      processedData_1=this.myObject.objectsArray_1.map((obj)=>{
        const item_name = obj.item_name
        const item_price = obj.item_price 
        const item_no_bags = obj.item_no_bags
        return {
          item_no_bags: item_no_bags,
          item_name: item_name,
          item_price: item_price
        }
      })
    }

   
    const requestBody = {
        Fname: this.myObject.Fname,
        objectsArray: processedData,
        objectsArray_1: processedData_1,
        advance: this.myObject.advance,
        vehicle_charge: this.myObject.vehicle_charge
      }

    console.log(requestBody)
    this.billService.addBill(requestBody).subscribe(
      response => {
        const billNo = response;
        console.log(billNo)
        // Do something with the bill number, e.g., display a success message
      },
      error => {
        console.log(error)
        // Handle error response
      }
    );
  }

  ngOnInit(): void {
  }

}
 