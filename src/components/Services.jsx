import { SERVICES } from "../data/content";
import Img from "./Img";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="leistungen" className="section container">
      <Reveal>
        <h2 className="display h2">Unsere <span className="accent">Leistungen</span></h2>
        <p className="lead">Vom Kleinwagen bis zum SUV: Wir helfen, wenn Ihr Fahrzeug nicht mehr weiterkommt.</p>
      </Reveal>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={(i % 2) * 120}>
            <article className="card">
              <div className="card__media">
                <Img image={s.image} alt={s.title} sizes="(min-width: 1280px) 616px, (min-width: 768px) 50vw, 100vw" className="card__img" />
                <div className="card__fade" />
                <span className="card__num">{s.id}</span>
              </div>
              <div className="card__body">
                <h3 className="display card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
