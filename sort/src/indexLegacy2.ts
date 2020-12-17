/* We are going to build a Sort class which sorts Number arrays and Strings according to ASCII Code */
/* We are going to code in such a way so that our code will be reusable */

import {Sort} from "./Sort";
import {NumbersCollection} from "./NumbersCollection";
import {StringCollection} from "./StringCollection";

let numbersCollection = new NumbersCollection([4,3,1,0,-1,11,0]);
let stringCollection = new StringCollection("Bangladesh");

let sortMethodNumber = new Sort(numbersCollection);
sortMethodNumber.sort();
console.log(sortMethodNumber.collection.data);

let sortMethodString = new Sort(stringCollection);
sortMethodString.sort();
console.log(sortMethodString.collection.data);