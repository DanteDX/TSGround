// Even if we not declare the types TS will automatically infer the types
const fullName: string = "Shadman Martin";
const roll: number = 100;
const hasPassed: boolean = false;
let isEmpty: null = null;

let studentsName: string[] = ["martin","moss","roy"];
let studentsMarks: number[] = [100,98,90];

let namesMarks: (string | number)[] = ["moss",100,"martin",30];

//#########################################################

class Car{};
let car: Car = new Car(); // this is for class declaration

// Object literal declaration
// there are semicolons in the object literals
let details: {name:string; roll:number; gender:string; isVeteran:boolean;} = {
    name: "Piyal DX",
    roll: 3,
    gender: "male",
    isVeteran: false
};
console.log(details);

// annotations in functions
const logNumber: (x:number, y:number) => void = (x:number, y:number) =>{
    console.log(x + y);
}
logNumber(100,200);
