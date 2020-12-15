// import {User} from "./User.ts";
// console.log("user details");
// let user = new User();
// console.log(user.name);
// console.log(user.location.lat);
// console.log(user.location.lng);

// console.log("############");
// console.log("Company Details:");
// import {Company} from "./Company.ts";
// let company = new Company();
// console.log(company.companyName);
// console.log(company.catchPhrase);
// console.log(company.location);
new google.maps.Map(document.getElementById("mapzz"),{
    zoom:3,
    center:{
        lat:0,
        lng:0
    }
});