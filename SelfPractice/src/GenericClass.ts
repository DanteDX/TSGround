// Introducing Generic Class

abstract class SortMethod<T>{
  abstract sortedData: T[];
  constructor(public data: T[]) { }
  sort(): void{
    for (let i = 0; i < this.data.length; i++){
      for (let j = 0; j < this.data.length - 1 - i; j++){
        if (this.data[j] > this.data[j + 1]) {
          let temp = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = temp;
        }
      }
    }
    // copying the new sorted data into this.sortedData
    for (let k = 0; k < this.data.length; k++){
      this.sortedData[k] = this.data[k];
    }
  }
}

class Method<T> extends SortMethod<T>{
  sortedData: T[] = [];
  constructor(data: T[]) {
    super(data);
  }
}

let newMethod = new Method<number>([11, 5, 0, -1, -2, 3]);
newMethod.sort();
console.log(newMethod.sortedData); // [-2,-1,0,3,5,11]