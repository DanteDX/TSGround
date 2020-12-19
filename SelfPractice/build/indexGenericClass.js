"use strict";
// Introducing Generic Class
class SortMethod {
    constructor(data) {
        this.data = data;
    }
    sort() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data.length - 1 - i; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }
        // copying the new sorted data into this.sortedData
        for (let k = 0; k < this.data.length; k++) {
            this.sortedData[k] = this.data[k];
        }
    }
}
class Method extends SortMethod {
    constructor(data) {
        super(data);
        this.sortedData = [];
    }
}
let newMethod = new Method([11, 5, 0, -1, -2, 3]);
newMethod.sort();
console.log(newMethod.sortedData); // [-2,-1,0,3,5,11]
