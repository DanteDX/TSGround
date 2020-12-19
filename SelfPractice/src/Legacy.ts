import  CSVReader from "./CSVReader";
let csvReader = new CSVReader("MOCK_DATA.csv");
csvReader.read();

type DataTupple = [number, string, string, string, string,string];
enum Gender{
  FemaleGender = "Female",
  MaleGender = "Male"
}
let maleCounter = 0;
let femaleCounter = 0;

csvReader.getData().forEach((eachRow: DataTupple): void => {
  if (eachRow[4] === Gender.MaleGender) maleCounter++;
  if (eachRow[4] === Gender.FemaleGender) femaleCounter++;
});
console.log(`
  <h1>Females are: ${femaleCounter}</h1>
  <h1>Males are: ${maleCounter}</h1>
`);

// import { DateConverter } from "./utils/DateConverter";
// console.log(DateConverter("11/10/2010"));// new Date(2010,9,12)
// console.log(new Date(2010, 3, 10));// 2010,4,9