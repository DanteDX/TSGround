export interface Sortable{
  data: any;
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sort{
  constructor(public collection: Sortable){}
  public sort():void{
    const length = this.collection.length;
    for(let i = 0;i<length;i++){
      for(let j = 0;j<length - i - 1;j++){
        if(this.collection.compare(j,j+1) === true){
          this.collection.swap(j,j+1);
        }
      }
    }
  }
}