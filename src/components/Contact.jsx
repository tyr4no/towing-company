import { BUSINESS } from "../data/content";
import { PhoneIcon, WhatsAppIcon, PinIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontakt" className="section contact">
      <div className="container">
        <Reveal>
          <h2 className="display contact__title">Panne? Unfall? Jetzt anrufen.</h2>

          <a href={BUSINESS.phoneHref} className="contact__phone" aria-label={`Anrufen: ${BUSINESS.phoneDisplay}`}>
            <PhoneIcon /> <span>{BUSINESS.phoneDisplay}</span>
          </a>

          <div className="contact__actions">
            <a href={BUSINESS.phoneHref} className="btn btn--primary"><PhoneIcon /> Anrufen</a>
            <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </Reveal>

        <dl className="contact__info">
          <div className="info">
            <PinIcon />
            <div><dt>Standort</dt><dd>{BUSINESS.location}</dd></div>
          </div>
          <div className="info">
            <PinIcon />
            <div><dt>Einsatzgebiet</dt><dd>{BUSINESS.area}</dd></div>
          </div>
        </dl>
      </div>
    </section>
  );
}
