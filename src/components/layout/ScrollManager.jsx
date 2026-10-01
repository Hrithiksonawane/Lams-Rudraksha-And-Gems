import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Scrolls to a section (location.state.scrollTo) or to the top on every page change.
export default function ScrollManager() {
  const { pathname, state, key } = useLocation();
  useEffect(() => {
    const id = state?.scrollTo;
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
    else window.scrollTo(0, 0);
  }, [pathname, state, key]);
  return null;
}
