import * as faker from 'faker';
import {Mappable} from './CustomMap';

export class Company implements Mappable{
    name: string;
    catchPhrase: string;
    location:{
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }
    getContent():string{
        return `
            <div style="color:red;">
                <h2>${this.name}</h2>
                <h3>${this.catchPhrase}</h3>
        `
    }
}