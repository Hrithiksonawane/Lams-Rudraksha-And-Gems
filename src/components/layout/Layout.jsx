import { Outlet } from "react-router-dom";
import SharedDefs from "../art/SharedDefs";
import StarField from "./StarField";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollManager from "./ScrollManager";
// The "master page": everything every page shares.
export default function Layout() {
  return (<><SharedDefs /><StarField /><ScrollManager /><Navbar /><main><Outlet /></main><Footer /><WhatsAppButton /></>);
}
