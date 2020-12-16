"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    Sort() {
        const length = this.collection.length;
        if (this.collection instanceof Array) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        let temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        if (typeof (this.collection) === 'string') {
            this.collection = this.collection.split("").sort().join("");
        }
    }
}
let SorterArray = new Sorter([10, 11, 9, 8, -1, -3, 4, 10]);
SorterArray.Sort();
console.log(SorterArray.collection);
let SorterString = new Sorter("bangladesh");
SorterString.Sort();
console.log(SorterString.collection);
