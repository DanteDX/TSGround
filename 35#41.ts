interface Vehicle{
    name:string;
    age:number;
    summary(x: number):string;
}

const infoVehicle = (details: Vehicle):void =>{
    console.log(details.name);
    console.log(details.age);
    console.log(details.summary(3));
}

const details: Vehicle = {
    name:'nimki',
    age:40,
    summary(x: number):string{
        return typeof(x.toString());
    }
}

infoVehicle(details);