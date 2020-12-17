"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
class StringCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(leftIndex, rightIndex) {
        let characters = this.data.split("");
        let temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join("");
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() >
            this.data[rightIndex].toLowerCase();
    }
}
exports.StringCollection = StringCollection;
