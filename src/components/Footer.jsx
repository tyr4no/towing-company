import { BUSINESS } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__claim">{BUSINESS.closing}</p>
        <nav aria-label="Rechtliches" className="footer__links">
          {/* TODO: Impressum und Datenschutz sind in Deutschland Pflicht. Echte Links eintragen. */}
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
        </nav>
        <p>© {new Date().getFullYear()} {BUSINESS.name}</p>
      </div>
    </footer>
  );
}
