import { Weights2 } from "./weights2";
import { Weights3 } from "./weights3";

export class Weights{
    _id:string;
    bill_no: string
    Fname: string
    objectsArray: Weights2[]
    objectsArray_1: Weights3[] 
    totalBags: number
    grandTotal: number
    labour: number
    commision: number
    pay: number
    constructor(_id:string,bill_no:string,Fname:string,objectsArray: Weights2[],objectsArray_1: Weights3[],totalBags:number,grandTotal:number,labour:number,commision:number,pay:number){
        this._id=_id
        this.bill_no=bill_no
        this.Fname=Fname
        this.objectsArray=objectsArray
        this.objectsArray_1=objectsArray_1
        this.totalBags=totalBags
        this.grandTotal=grandTotal
        this.labour=labour
        this.commision=commision
        this.pay=pay
    }
}