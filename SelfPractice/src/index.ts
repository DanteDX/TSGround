// making a CSVReader  Class
import fs from 'fs';
type DataTupple = [number, string, string, string, string, string];
class CSVReader{
  data: DataTupple[] = [];
  constructor(public fileName: string) {
    this.read(this.fileName);
  }
  read(fileName: string):void {
    this.data = fs.readFileSync(fileName, {
      encoding: 'utf-8'
    }).split("\n")
      .map((eachRowString: string): string[] => eachRowString.split(","))
      .map((eachRow: string[]): DataTupple => [Number(eachRow[0]), eachRow[1], eachRow[2], eachRow[3], eachRow[4], eachRow[5]]);
  }
}
// Use CSVReader class to read MockData.csv file and generate htmlData
let reader = new CSVReader('MOCK_DATA.csv');
let dataToWrite = reader.data.map((eachRow: DataTupple):string => {
  return `
    <p style="margin:0 auto;">Name: ${eachRow[1] + eachRow[2]}</p>
    <p style="margin:0 auto;">Email: ${eachRow[3]}</p>
    <p style="margin:0 auto;">IP Address: ${eachRow[5]}</p>
    <br/>
  `
});
let dataToWriteReal:string = dataToWrite.reduce((x: string, y: string): string => x + y);
// use that read data to generate a html file by fs.fileWriteSync
fs.writeFileSync('GeneratedFile.html', dataToWriteReal);