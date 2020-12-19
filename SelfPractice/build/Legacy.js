"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSVReader_1 = __importDefault(require("./CSVReader"));
let csvReader = new CSVReader_1.default("MOCK_DATA.csv");
csvReader.read();
var Gender;
(function (Gender) {
    Gender["FemaleGender"] = "Female";
    Gender["MaleGender"] = "Male";
})(Gender || (Gender = {}));
let maleCounter = 0;
let femaleCounter = 0;
csvReader.getData().forEach((eachRow) => {
    if (eachRow[4] === Gender.MaleGender)
        maleCounter++;
    if (eachRow[4] === Gender.FemaleGender)
        femaleCounter++;
});
console.log(`
  <h1>Females are: ${femaleCounter}</h1>
  <h1>Males are: ${maleCounter}</h1>
`);
// import { DateConverter } from "./utils/DateConverter";
// console.log(DateConverter("11/10/2010"));// new Date(2010,9,12)
// console.log(new Date(2010, 3, 10));// 2010,4,9
