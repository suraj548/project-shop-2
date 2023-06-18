import { Weights2 } from "./weights2";

export class Weights{
    _id:string;
    token_no: string
    Fname: string
    objectsArray: Weights2[]
    total: number
    labour: number
    commision: number
    pay: number
    constructor(_id:string,token_no:string,Fname:string,objectsArray: Weights2[],total:number,labour:number,commision:number,pay:number){
        this._id=_id
        this.token_no=token_no
        this.Fname=Fname
        this.objectsArray=objectsArray
        this.total=total
        this.labour=labour
        this.commision=commision
        this.pay=pay
    }
}