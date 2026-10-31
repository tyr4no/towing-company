import { BUSINESS, REGIONS } from "../data/content";
import { PinIcon } from "./Icons";
import Reveal from "./Reveal";

export default function ServiceArea() {
  return (
    <section id="einsatzgebiet" className="section container">
      <div className="area">
        <Reveal>
          <h2 className="display h2">Zentral an der <span className="accent">A7 / A23</span></h2>
          <p className="lead">
            Wir sitzen in {BUSINESS.city} und sind schnell auf den wichtigen Strecken im Norden. Einsatzgebiet: {BUSINESS.area}.
          </p>
          <ul className="chips">
            {REGIONS.map((r) => (
              <li key={r} className="chip">{r}</li>
            ))}
            <li className="chip chip--plain">und Umgebung</li>
          </ul>
        </Reveal>

        <Reveal delay={150} className="radar" aria-hidden="true">
          <span className="radar__ring" />
          <span className="radar__ring" />
          <span className="radar__ring" />
          <span className="radar__static radar__static--a" />
          <span className="radar__static radar__static--b" />
          <div className="radar__center">
            <PinIcon className="radar__pin" />
            <span className="display radar__city">{BUSINESS.city}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
