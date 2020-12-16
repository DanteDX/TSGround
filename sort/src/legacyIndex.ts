// interface defines public variable, not private or protected
interface dataInterface{
  name: string;
  age: number;
  profession: string;
  location:{
    lat: number;
    lng: number;
  }
  getInfo():void;
}
// a small change here
class Data implements dataInterface{
  name: string;
  age: number;
  profession: string;
  location:{
    lat: number;
    lng: number;
  }
  // file has been changed
  constructor(name:string,age:number,profession:string,lat:number,lng:number){
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.location = {lat,lng};
  }
  public getInfo():void{
    console.log(this.name,this.age,this.profession,this.location);
  }
}

let human = new Data('shadman',20,'web developer',100,100);
human.getInfo();