// Practicing class composition

class Name{
  constructor(public name: string) { } 
  getName(): string{
    return this.name;
  }
}

class Age{
  constructor(public age: number) { } 
  getAge(): number{
    return this.age;
  }
}

class GetInfo{
  constructor(name: string, age: number) {
    let nameInstance = new Name(name);
    let ageInstance = new Age(age);
    console.log(nameInstance.getName());
    console.log(ageInstance.getAge());
  }
}

let infoClass = new GetInfo('shadman', 20);

