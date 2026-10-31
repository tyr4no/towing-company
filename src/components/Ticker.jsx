import { TICKER } from "../data/content";

export default function Ticker() {
  const items = [...TICKER, ...TICKER]; // each half is identical, so translateX(-50%) loops seamlessly
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[0, 1].map((half) => (
          <ul key={half} className="ticker__list">
            {items.map((t, i) => (
              <li key={i} className="ticker__item">
                <span>{t}</span>
                <span>/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
