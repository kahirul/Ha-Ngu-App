export interface BaseItem {
  id: number;
  by: string;
  kids?: number[];
  time: number;
  type: string;
}
