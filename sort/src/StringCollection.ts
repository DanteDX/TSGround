import { Sortable } from "./Sort";

export class StringCollection implements Sortable{
  constructor(public data: string){}
  get length(): number{
    return this.data.length;
  }
  public swap(leftIndex: number, rightIndex: number): void{
    let characters = this.data.split("");
    let temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join("");
  }
  public compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[leftIndex].toLowerCase() >
           this.data[rightIndex].toLowerCase();
  }
}