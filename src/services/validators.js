// Each rule is independent. To add a rule (e.g. email), just add one entry.
const rules = [
  (v) => (!v.name?.trim() || !v.address?.trim() || !v.city?.trim()) && "Please fill in your name, address and city.",
  (v) => (v.phone || "").replace(/\D/g, "").length < 10 && "Please enter a valid 10-digit phone number.",
  (v) => !/^\d{6}$/.test(v.pincode || "") && "Please enter a valid 6-digit pincode.",
];
export const validateCheckout = (values) => rules.map((r) => r(values)).find(Boolean) || "";
