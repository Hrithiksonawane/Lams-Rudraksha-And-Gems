import { createContext, useCallback, useContext, useRef, useState } from "react";
const ToastContext = createContext(() => {});
export function ToastProvider({ children }) {
  const [msg, setMsg] = useState("");
  const timer = useRef();
  const show = useCallback((text) => { setMsg(text); clearTimeout(timer.current); timer.current = setTimeout(() => setMsg(""), 1800); }, []);
  return (<ToastContext.Provider value={show}>{children}<div className={`toast ${msg ? "on" : ""}`}>{msg}</div></ToastContext.Provider>);
}
export const useToast = () => useContext(ToastContext);
