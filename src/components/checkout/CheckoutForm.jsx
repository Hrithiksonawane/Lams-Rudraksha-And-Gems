import { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { formatPrice } from "../../services/pricing";
import { validateCheckout } from "../../services/validators";
// Collects delivery details and hands them to onSubmit(customer). Knows nothing about WhatsApp or the cart.
export default function CheckoutForm({ total, onSubmit }) {
  const [v, setV] = useState({ payment: siteConfig.paymentMethods[0] });
  const [error, setError] = useState("");
  const set = (e) => setV({ ...v, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); const err = validateCheckout(v); setError(err); if (!err) onSubmit(v); };
  return (
    <form className="box" onSubmit={submit} noValidate>
      <h3>Delivery Details</h3>
      <label>Full name</label><input name="name" autoComplete="name" onChange={set} />
      <div className="two">
        <div><label>Phone (WhatsApp)</label><input name="phone" inputMode="numeric" autoComplete="tel" onChange={set} /></div>
        <div><label>Email (optional)</label><input name="email" type="email" autoComplete="email" onChange={set} /></div>
      </div>
      <label>Full address</label><textarea name="address" rows="3" autoComplete="street-address" onChange={set} />
      <div className="two">
        <div><label>City</label><input name="city" onChange={set} /></div>
        <div><label>Pincode</label><input name="pincode" inputMode="numeric" maxLength={6} onChange={set} /></div>
      </div>
      <label>Note (optional, e.g. which Mukhi for pendant)</label><input name="note" onChange={set} />
      <label>Payment</label>
      <div className="pay">{siteConfig.paymentMethods.map((m) => (
        <label key={m}><input type="radio" name="payment" value={m} checked={v.payment === m} onChange={set} /> {m}</label>))}</div>
      <div className="err">{error}</div>
      <button className="btn" style={{ width: "100%", marginTop: 14 }} type="submit">Place Order · {formatPrice(total)}</button>
      <p className="note">Your order opens in WhatsApp so we can confirm payment and delivery with you.</p>
    </form>
  );
}
