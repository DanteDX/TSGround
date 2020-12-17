import { SorterInterface } from "../interfaces/SorterInterface";

export abstract class Sorter implements SorterInterface{
  abstract data: number[];
  abstract swap(leftIndex:number, rightIndex:number): void;
  abstract compare(leftIndex:number, rightIndex:number): boolean;
  sort(): void{
    let length = this.data.length;
    for (let i = 0; i < length; i++){
      for (let j = 0; j < length - 1 - i; j++){
        if (this.compare(j,j+1) === true) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}