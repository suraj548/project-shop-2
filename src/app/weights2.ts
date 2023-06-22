export class Weights2{
    numbers: Array<number>
    item_name:string
    item_price:number
    item_total_weight:number
    item_total:number
    item_no_bags:number
    

    constructor(numbers:Array<number>,item_name:string,item_price:number,item_total_weigt:number,item_total:number,item_no_bags:number){
        this.numbers=numbers
        this.item_name=item_name
        this.item_price=item_price
        this.item_total_weight=item_total_weigt
        this.item_total=item_total
        this.item_no_bags=item_no_bags
    }
}