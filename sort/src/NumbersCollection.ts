import { Sortable } from "./Sort";
export class NumbersCollection implements Sortable{
  constructor(public data: number[]){}
  
  get length(): number{
    return this.data.length;
  }
  public swap(leftIndex: number,rightIndex: number):void{
    let temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
  public compare(leftIndex:number, rightIndex: number):boolean{
    return this.data[leftIndex] > this.data[rightIndex];
  }
}