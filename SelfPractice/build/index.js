"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// making a CSVReader  Class
const fs_1 = __importDefault(require("fs"));
class CSVReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
        this.read(this.fileName);
    }
    read(fileName) {
        this.data = fs_1.default.readFileSync(fileName, {
            encoding: 'utf-8'
        }).split("\n")
            .map((eachRowString) => eachRowString.split(","))
            .map((eachRow) => [Number(eachRow[0]), eachRow[1], eachRow[2], eachRow[3], eachRow[4], eachRow[5]]);
    }
}
// Use CSVReader class to read MockData.csv file and generate htmlData
let reader = new CSVReader('MOCK_DATA.csv');
let dataToWrite = reader.data.map((eachRow) => {
    return `
    <p style="margin:0 auto;">Name: ${eachRow[1] + eachRow[2]}</p>
    <p style="margin:0 auto;">Email: ${eachRow[3]}</p>
    <p style="margin:0 auto;">IP Address: ${eachRow[5]}</p>
    <br/>
  `;
});
let dataToWriteReal = dataToWrite.reduce((x, y) => x + y);
// use that read data to generate a html file by fs.fileWriteSync
fs_1.default.writeFileSync('GeneratedFile.html', dataToWriteReal);
