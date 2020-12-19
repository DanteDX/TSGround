export const DateConverter = (dateString: string): Date => {
  let dateParts = dateString.split("/").map((eachPart: string) => Number(eachPart));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0] + 1);
}