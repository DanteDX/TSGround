class Man{
    protected name: string;
    protected age: number;
    protected NameAge: string;
    constructor(name: string,age:number){
        this.name = name;
        this.age = age;
    }
    public getName():string{
        return this.name;
    }
    public getAge():number{
        return this.age;
    }
    protected NameAgeGenerator():string{
        this.NameAge = this.name + this.age.toString();
        return this.NameAge;
    }
    public getNameAge():string{
        return this.NameAgeGenerator();
    }
    protected ManPrivate():string{
        return "This is class Man";
    }
    public getManPrivate():string{
        return this.ManPrivate();
    }
}

let simpleMan = new Man('Shadman',20);
console.log(simpleMan.getName());
console.log(simpleMan.getAge());
console.log(simpleMan.getNameAge());
console.log(simpleMan.getManPrivate());

class Saiyan extends Man{
    constructor(public powerLevel:number,name:string,age:number){
        super(name,age);
        this.powerLevel = powerLevel;
    }
    public getNamePowerLevel():string{
        return this.NameAgeGenerator();
    }
}

let simpleSaiyan = new Saiyan(10000,'Shadman',30);
console.log(simpleSaiyan.getNamePowerLevel());