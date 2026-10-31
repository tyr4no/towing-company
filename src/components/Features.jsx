import { FEATURES } from "../data/content";
import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="vorteile" className="section section--panel">
      <div className="container">
        <Reveal>
          <h2 className="display h2" style={{ maxWidth: "48rem" }}>
            Darauf können Sie sich <span className="accent">verlassen</span>
          </h2>
        </Reveal>

        <ul className="features__list">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 100} className="feature">
              <span className="feature__icon"><CheckIcon /></span>
              <div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__text">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
