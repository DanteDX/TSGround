//#17, understanding inference
let apples: number;
apples = 10;
// inference will not work because declaration & initilization wasn't done on the same line

// #18, the 'any' type
/* The type of the return value of JSON.parse(something) is of 'any' type
as JSON.parse(something) is not sure what it will be receiving as input &
what will be its output */
const json: string = '{"x":10,"y":20}';
const parsedData = JSON.parse(json);
console.log(parsedData);

// #19, Fixing the 'any' type
// we can add a object literal to parsedData to be more sure of the data it is receiving
console.log("######################");
const parsedDataFixed: {x: number; y: number;} = JSON.parse(json);
console.log(parsedDataFixed.x);
console.log(parsedDataFixed.y);

// trying out by myself
const integerNumbers: number[] = [2,3,4];
const integerNumbersSquared: number[] = integerNumbers.map((each: number):number => each * each);
console.log(integerNumbersSquared);

const moneyChecker: (money:number) => (boolean | number) = (money: number) =>{
    let hasMoney: (number | boolean) = false; // inference in action
    if(money > 0){
        hasMoney = money;
    }
    return hasMoney;
}
console.log(moneyChecker(-1000));
console.log(moneyChecker(1000));
// My trying ends here