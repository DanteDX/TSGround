"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVReader = /** @class */ (function () {
    function CSVReader(filename) {
        this.filename = filename;
        this.data = [[]];
    }
    CSVReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n")
            .map(function (eachString) { return eachString.split(","); });
    };
    CSVReader.prototype.getData = function () {
        return this.data;
    };
    return CSVReader;
}());
exports.default = CSVReader;
