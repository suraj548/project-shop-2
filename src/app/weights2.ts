export class Weights2{
    numbers: Array<number>
    item:string
    price:number
    total:number
    no_bags:number
    

    constructor(numbers:Array<number>,item:string,price:number,total:number,no_bags:number){
        this.numbers=numbers
        this.item=item
        this.price=price
        this.total=total
        this.no_bags=no_bags
    }
}