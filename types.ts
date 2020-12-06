const today = new Date();

const todayData = {
    day: today.getUTCDay(),
    month: today.getMonth(),
    year: today.getUTCFullYear()
}

console.log(todayData);

class Details{
    constructor(x: number){
        console.log(x);
    }
}

const numberData = new Details(10);