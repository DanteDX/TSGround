"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArraySorter_1 = require("./ArraySorter");
let sample = new ArraySorter_1.ArraySorter([3, 2, 1, 10, -1, -2, 10, 11, 13, 1, 0]);
sample.sort();
console.log(sample.collection);
