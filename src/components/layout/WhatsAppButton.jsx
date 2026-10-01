import { siteConfig } from "../../config/siteConfig";
export default function WhatsAppButton() {
  return <a className="wa" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>;
}
