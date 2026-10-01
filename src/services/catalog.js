// Read-only access to products. Pages never touch the raw data directly.
import { products } from "../data/products";
export const getProduct = (id) => products.find((p) => p.id === id);
export const listByType = (type) => products.filter((p) => p.type === type);
export const listRelated = (p, n = 4) => products.filter((x) => x.type === p.type && x.id !== p.id).slice(0, n);
