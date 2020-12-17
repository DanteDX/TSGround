import { Sorter } from "./abstractClasses/Sorter";

export class ArraySorter extends Sorter{
  constructor(public data: number[]) {
    super();
  }
  get collection(): number[]{
    return this.data;
  }
  compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void{
    let temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}