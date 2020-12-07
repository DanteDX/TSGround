// without destructuring
const forecastOld = {
    date: new Date(),
    weather: 'sunny'
};

const logWeatherOld = (forecast: {date: Date, weather: string}):void =>{
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeatherOld(forecastOld);

// with destructure way of writing it

const logWeather = ({date,weather}:{date: Date, weather:string}) =>{
    console.log(date);
    console.log(weather);
}

console.log("############################");
logWeather(forecastOld);

// more destructuring in action
console.log("************************************");
console.log("**************************************");

const profileMine = {
    firstName:"shadman",
    age: 27,
    position:{
        lat:100,
        lng:100
    },
    title:'gregorian'
};

/* normal destructuring
const {name, age,position:{lat,lng},title} = profileMine; */
const {firstName,age,position:{lat,lng},title} : {
    firstName:string,age:number,position:{lat:number;lng:number;},title:string
} = profileMine;

console.log(firstName,age,lat,lng,title);

// how to use destructuring more efficiently using interface

const myInfo = {
    firstname:'shadman',
    profession:'web developer',
    age:20,
    color:'red'
};

interface infoInterface{
    firstname:string;
    profession:string;
    age:number;
    color:string;
}

const {firstname,profession,age,color}:infoInterface = myInfo;
console.log(firstname,profession,age,color);
console.log("#################################################");