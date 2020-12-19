"use strict";
// Practicing class composition
class Name {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Age {
    constructor(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
class GetInfo {
    constructor(name, age) {
        let nameInstance = new Name(name);
        let ageInstance = new Age(age);
        console.log(nameInstance.getName());
        console.log(ageInstance.getAge());
    }
}
let infoClass = new GetInfo('shadman', 20);
