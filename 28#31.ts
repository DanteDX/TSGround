// all about typed arrays
const carMakers: string[] = ["hello","hi","there"];
const carMakersModified = carMakers.map((each:string):string => each + "1");
console.log(carMakersModified);
// typed arrays end here

console.log("###########################");
// how to define custom types of arrays in use
const information: {name:string;age:number;profession:string}[] = [];
information.push({name:'shadman',age:100,profession:'web developer'});
information.push({name:'annie',age:30,profession:'software engineer'});
information.push({name:'marianne',age:100,profession:'technician'});
console.log(information);
console.log("################################");

interface informationLiteral{
    name:string;
    age:number;
    profession:string;
}
const newInformation: informationLiteral[] = [];
newInformation.push({name:'shadman',age:100,profession:'web developer'});
newInformation.push({name:'annie',age:30,profession:'software engineer'});
newInformation.push({name:'marianne',age:100,profession:'technician'});
console.log(newInformation);
console.log("***********************************");
