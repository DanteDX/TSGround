"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArraySorter = void 0;
const Sorter_1 = require("./abstractClasses/Sorter");
class ArraySorter extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get collection() {
        return this.data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        let temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
exports.ArraySorter = ArraySorter;
