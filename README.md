# Sacred Rudraksha – React store

Pages: **Home**, **Product** (`/product/:id`), **Checkout**, **Thank-you**. Orders are sent through WhatsApp.

## Run it
```
npm install
npm run dev      # open the link it prints
npm run build    # creates /dist (upload this folder to Netlify / any host)
```

## Where to change things (no coding knowledge of the rest needed)
| I want to…                         | Edit this file                       |
|------------------------------------|--------------------------------------|
| Set WhatsApp number, shipping      | `src/config/siteConfig.js`           |
| Change prices / benefits           | `src/data/rudraksha.js`, `gemstones.js`, `pendant.js` |
| Add a real photo to a product      | put image in `public/images/`, add `photo: "images/x.jpg"` to that product |
| Edit FAQ / promise text            | `src/data/siteContent.js`            |
| Add a menu link                    | `links` list in `src/components/layout/Navbar.jsx` |
| Change colors / look               | `src/styles/master.css` (shared), `home.css`, `product.css`, `checkout.css` |
| Add a new page                     | create it in `src/pages/`, add one `<Route>` in `src/App.jsx` |

## Structure
```
src/
  config/     siteConfig.js            settings
  data/       products + page text     DATA ONLY (no logic)
  services/   pricing, catalog, cart, validators, order, orderChannels, storage   pure logic
  context/    CartContext, ToastContext
  components/ art/ layout/ ui/ product/ checkout/ home/    small reusable pieces
  pages/      HomePage, ProductPage, CheckoutPage, ThanksPage, NotFoundPage
  styles/     master.css + one css per page
```

## How SOLID is applied
- **S – Single Responsibility:** every file does one job. `cartService` only does cart math, `validators` only validates, `CheckoutForm` only collects details, `OrderSummary` only shows the cart.
- **O – Open/Closed:** add a product by adding a data row. Add a new kind of drawing by adding one line to `components/art/index.jsx`. Add a validation by adding one rule to `validators.js`. Existing code is not changed.
- **L – Liskov Substitution:** any "order channel" (`{link, send}`) can replace another, and any storage object with `read/write` can replace localStorage, without breaking the app.
- **I – Interface Segregation:** components receive only what they need (e.g. `CheckoutForm` gets `total` and `onSubmit`, not the whole cart).
- **D – Dependency Inversion:** `CheckoutPage` depends on an abstract order channel passed in as a prop, not on WhatsApp directly. To use Razorpay or your own server, write `createRazorpayChannel()` in `services/orderChannels.js` with `send()` and `link()` and pass it in.

Routing uses `HashRouter`, so the built site works on any static host with no server setup.
