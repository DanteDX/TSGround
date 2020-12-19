"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSVReader_1 = __importDefault(require("./CSVReader"));
let reader = new CSVReader_1.default("MOCK_DATA.csv");
reader.read();
console.log(reader.getData());
