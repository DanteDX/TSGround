const add = (a:number, b:number):void =>{
    console.log(a +b);
}

add(1,2);

const ErrorGenerator = (msg:string):never =>{
    throw new Error(msg);
}

ErrorGenerator('This is an error message');