import { BUSINESS } from "../data/content";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

/** Mobile/tablet bottom bar: someone with a breakdown is on their phone, so calling is always one tap away. */
export default function StickyCall() {
  return (
    <div className="sticky">
      <a href={BUSINESS.phoneHref} className="sticky__call"><PhoneIcon /> Jetzt anrufen</a>
      <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp schreiben" className="sticky__chat">
        <WhatsAppIcon /> <span>WhatsApp</span>
      </a>
    </div>
  );
}
