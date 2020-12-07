/* When we are using csv files, it is better to use tuples
but, normally, we should stick to JavaScript Objects */

// we are studying about Tuples
const information = {
    name:'shadman',
    age:30,
    isGood: true
};
console.log(information);
console.log("*******************");

const info: [string,number,boolean] = ['shadman',30,true];
console.log(info);
console.log("********************");
//using type alias
type infoAlias = [string,number,boolean];
const infoWithAlias: infoAlias = ['shadman',40,false];
console.log(infoWithAlias);
console.log("#######################");