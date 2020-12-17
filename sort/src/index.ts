import { ArraySorter } from "./ArraySorter";

let sample = new ArraySorter([3, 2, 1, 10, -1, -2, 10, 11, 13, 1, 0]);
sample.sort();
console.log(sample.collection);