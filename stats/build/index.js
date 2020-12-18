"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split("\n")
    .map((eachString) => eachString.split(","));
console.log(matches);
const powerLevelsEnum_1 = require("./enums/powerLevelsEnum");
console.log(powerLevelsEnum_1.PowerLevel.Goku);
console.log(powerLevelsEnum_1.PowerLevel.Vegeta);
