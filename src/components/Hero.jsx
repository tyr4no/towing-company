import { BUSINESS, PHOTOS } from "../data/content";
import Img from "./Img";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg">
        <Img
          image={PHOTOS.hero}
          alt="Abschleppwagen transportiert ein Fahrzeug auf der Ladefläche"
          loading="eager"
          fetchPriority="high"
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>

      {/* tow-truck beacon: alternating amber and red lights */}
      {/* <div className="hero__beacon" aria-hidden="true">
        <i /><i /><i /><i />
      </div> */}

      <div className="container hero__content">
        <h1 className="display hero__title">
          <span className="hero__mt anim-up" style={delay(100)}>M.T.</span>
          <span className="hero__line anim-up" style={delay(300)}>Abschleppdienst</span>
          <span className="hero__line accent anim-up" style={delay(500)}>&amp; Pannenhilfe</span>
        </h1>

        <p className="hero__tagline anim-up" style={delay(750)}>{BUSINESS.tagline}</p>
        <p className="hero__text anim-up" style={delay(850)}>
          Abschleppdienst, Pannenhilfe und Unfallfahrzeugtransport in Schleswig-Holstein und Hamburg. Rund um die Uhr.
        </p>

        <div className="hero__actions anim-up" style={delay(1000)}>
          <a href={BUSINESS.phoneHref} className="btn btn--primary btn--pulse">
            <PhoneIcon /> <span>Jetzt anrufen</span>
          </a>
          <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            <WhatsAppIcon /> <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
