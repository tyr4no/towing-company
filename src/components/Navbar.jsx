import { useEffect, useState } from "react";
import { BUSINESS, NAV } from "../data/content";
import { PhoneIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open; close it if the screen grows to desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="container nav__bar">
        <a href="#top" className="nav__logo" onClick={close}>
          <span className="accent">M.T.</span> <span className="nav__logo-text">Abschleppdienst</span>
        </a>

        <nav className="nav__links" aria-label="Hauptnavigation">
          {NAV.slice(0, -1).map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
          <a href={BUSINESS.phoneHref} className="nav__cta">
            <PhoneIcon /> {BUSINESS.phoneDisplay}
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="nav__menu" aria-label="Mobile Navigation">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="nav__menu-link" onClick={close}>{l.label}</a>
          ))}
          <a href={BUSINESS.phoneHref} className="btn btn--primary btn--block">
            <PhoneIcon /> {BUSINESS.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
