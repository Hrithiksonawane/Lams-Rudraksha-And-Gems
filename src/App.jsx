import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThanksPage from "./pages/ThanksPage";
import NotFoundPage from "./pages/NotFoundPage";
// To add a page: create it in /pages and add one <Route> below.
export default function App() {
  return (
    <CartProvider><ToastProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ToastProvider></CartProvider>
  );
}
