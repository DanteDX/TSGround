import CSVReader from "./CSVReader";

let reader = new CSVReader("MOCK_DATA.csv");
reader.read();
console.log(reader.getData());