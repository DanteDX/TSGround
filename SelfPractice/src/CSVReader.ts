import fs from "fs";
type DataTupple = [number, string, string, string, string, string];
interface CSVReaderInterface{
  filename: string;
  data: string[][];
  read(): void;
  getData(): DataTupple[];
}

enum GenderResult{
  MaleGender = "Male",
  FemaleGender = "Female"
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
  getData(): DataTupple[]{
    return this.data.map((eachRow: string[]): DataTupple => {
      if (eachRow[0] === 'id') {
        return [0, eachRow[1], eachRow[2], eachRow[3], eachRow[4] as GenderResult, eachRow[5]];
      } else {
        return [Number(eachRow[0]), eachRow[1], eachRow[2], eachRow[3], eachRow[4] as GenderResult, eachRow[5]]  
      }
    })
  }
}