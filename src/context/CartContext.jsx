import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { siteConfig } from "../config/siteConfig";
import { getProduct } from "../services/catalog";
import { createStorage } from "../services/storage";
import * as cartService from "../services/cartService";

const CartContext = createContext(null);
const defaultStore = createStorage("rudraksha.cart");

function reducer(cart, action) {
  switch (action.type) {
    case "change": return cartService.addItem(cart, action.id, action.qty);
    case "clear": return {};
    default: return cart;
  }
}

export function CartProvider({ children, store = defaultStore }) {
  const [cart, dispatch] = useReducer(reducer, undefined, () => store.read({}));
  useEffect(() => store.write(cart), [cart, store]);
  const value = useMemo(() => ({
    count: cartService.countItems(cart),
    summary: cartService.summarize(cart, getProduct, siteConfig.shipping),
    add: (id, qty = 1) => dispatch({ type: "change", id, qty }),
    change: (id, qty) => dispatch({ type: "change", id, qty }),
    clear: () => dispatch({ type: "clear" }),
  }), [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
