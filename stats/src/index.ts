import fs from 'fs';
let matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split("\n")
  .map((eachString: string): string[] => eachString.split(","));

console.log(matches);

import { PowerLevel } from "./enums/powerLevelsEnum";
console.log(PowerLevel.Goku);
console.log(PowerLevel.Vegeta);
