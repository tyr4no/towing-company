import { STEPS } from "../data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="ablauf" className="section section--panel">
      <div className="container">
        <Reveal>
          <h2 className="display h2">So läuft <span className="accent">Ihre Hilfe</span> ab</h2>
        </Reveal>

        <div className="road" aria-hidden="true" />

        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 150}>
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
