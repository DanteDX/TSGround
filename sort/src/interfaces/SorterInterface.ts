export interface SorterInterface{
  data: number[];
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
  sort(): void;
}