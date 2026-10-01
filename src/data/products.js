// The full catalog. To add a new product line, create a data file and add it here.
import { rudraksha } from "./rudraksha";
import { gemstones } from "./gemstones";
import { pendant } from "./pendant";
export const products = [...rudraksha, ...gemstones, ...pendant];
