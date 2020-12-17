"use strict";
/* We are going to build a Sort class which sorts Number arrays and Strings according to ASCII Code */
/* We are going to code in such a way so that our code will be reusable */
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./Sort");
const NumbersCollection_1 = require("./NumbersCollection");
const StringCollection_1 = require("./StringCollection");
let numbersCollection = new NumbersCollection_1.NumbersCollection([4, 3, 1, 0, -1, 11, 0]);
let stringCollection = new StringCollection_1.StringCollection("Bangladesh");
let sortMethodNumber = new Sort_1.Sort(numbersCollection);
sortMethodNumber.sort();
console.log(sortMethodNumber.collection.data);
let sortMethodString = new Sort_1.Sort(stringCollection);
sortMethodString.sort();
console.log(sortMethodString.collection.data);
