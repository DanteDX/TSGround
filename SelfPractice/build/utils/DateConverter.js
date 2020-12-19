"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateConverter = void 0;
const DateConverter = (dateString) => {
    let dateParts = dateString.split("/").map((eachPart) => Number(eachPart));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0] + 1);
};
exports.DateConverter = DateConverter;
