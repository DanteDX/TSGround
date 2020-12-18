import fs from "fs";
interface CSVReaderInterface{
  filename: string;
  data: string[][];
  read(): void;
  getData(): string[][];
}

export default class CSVReader implements CSVReaderInterface{
  filename: string;
  data: string[][];
  constructor(filename: string) {
    this.filename = filename;
    this.data = [[]];
  }
  read(): void{
    this.data = fs.readFileSync(this.filename, {
      encoding: "utf-8"
    }).split("\n")
      .map((eachString: string): string[] => eachString.split(","));
  }
  getData(): string[][]{
    return this.data;
  }
}