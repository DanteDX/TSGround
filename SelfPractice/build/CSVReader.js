"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
var GenderResult;
(function (GenderResult) {
    GenderResult["MaleGender"] = "Male";
    GenderResult["FemaleGender"] = "Female";
})(GenderResult || (GenderResult = {}));
class CSVReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [[]];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n")
            .map((eachString) => eachString.split(","));
    }
    getData() {
        return this.data.map((eachRow) => {
            if (eachRow[0] === 'id') {
                return [0, eachRow[1], eachRow[2], eachRow[3], eachRow[4], eachRow[5]];
            }
            else {
                return [Number(eachRow[0]), eachRow[1], eachRow[2], eachRow[3], eachRow[4], eachRow[5]];
            }
        });
    }
}
exports.default = CSVReader;
