import { VEHICLE } from "../data/content";
import Img from "./Img";
import Reveal from "./Reveal";

export default function Fleet() {
  return (
    <section id="fahrzeug" className="section container">
      <div className="fleet">
        <Reveal className="fleet__media">
          <div className="fleet__frame" aria-hidden="true" />
          <Img
            image={VEHICLE.image}
            alt="Einsatzfahrzeug von M.T. Abschleppdienst: Mercedes ML 270 in Silber"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="fleet__img"
          />
        </Reveal>

        <Reveal delay={150}>
          <h2 className="display h2">Unser <span className="accent">Einsatzfahrzeug</span></h2>
          <h3 className="fleet__name">{VEHICLE.title}</h3>
          <p className="fleet__text">{VEHICLE.text}</p>
          <dl className="fleet__facts">
            {VEHICLE.facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
