"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = __importDefault(require("./CSVReader"));
var csvReader = new CSVReader_1.default("MOCK_DATA.csv");
csvReader.read();
console.log(csvReader.getData());
