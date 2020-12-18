import  CSVReader from "./CSVReader";
let csvReader = new CSVReader("MOCK_DATA.csv");
csvReader.read();
console.log(csvReader.getData());