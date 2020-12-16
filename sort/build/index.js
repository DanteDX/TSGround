"use strict";
// a small change here
class Data {
    // file has been changed
    constructor(name, age, profession, lat, lng) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.location = { lat, lng };
    }
    getInfo() {
        console.log(this.name, this.age, this.profession, this.location);
    }
}
let human = new Data('shadman', 20, 'web developer', 100, 100);
human.getInfo();
