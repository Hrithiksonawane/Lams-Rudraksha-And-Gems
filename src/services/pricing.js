import { siteConfig } from "../config/siteConfig";
export const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");
export const strikePrice = (p) => Math.round((p * siteConfig.oldPriceMarkup) / 10) * 10;
