import { Elem } from "./Elem";

export type Root = {
  [name: string]: Elem | Root;
};
