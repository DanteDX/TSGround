// annotation for arrow function
const addArrow = (a:number, b: number):number =>{
    return a*b;
}

function addArrowNormal(a:number,b:number):number{
    return a*b;
}

const addArrowAnonymous = function(a:number,b:number):number{
    return a *b;
};

console.log(addArrow(3,4));
console.log(addArrowNormal(3,4));
console.log(addArrowAnonymous(3,4));