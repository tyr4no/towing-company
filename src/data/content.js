// Single source of truth for all copy, links and photos.

/** Unsplash helper: builds a responsive src + srcSet from a photo id. */
const photo = (id) => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=1200`,
  srcSet: [480, 800, 1200, 1800, 2400]
    .map((w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w} ${w}w`)
    .join(", "),
});

// Placeholder photos from Unsplash (free licence). Swap for your own later:
// replace photo("...") with { src: "/images/your-file.jpg" }.
export const PHOTOS = {
  hero: photo("1730514785075-b065c757b653"),     // tow truck with car on flatbed
  fleet: photo("1703130931523-5113aa0d4c3c"),    // flatbed with a silver car
  pkw: photo("1730514784243-f0e7f09c9f50"),      // tow truck towing a car on the road
  suv: photo("1698998882426-39a6609ab10a"),      // truck on flatbed trailer
  pannenhilfe: photo("1738101996177-13110d20a973"), // roadside helper next to tow truck
  unfall: photo("1592588221162-d0d872c34bf1"),   // damaged car
};

export const BUSINESS = {
  name: "M.T. Abschleppdienst & Pannenhilfe",
  phoneDisplay: "0155 66349020",
  phoneHref: "tel:+4915566349020",
  whatsappHref:
    "https://wa.me/4915566349020?text=Hallo%2C%20ich%20brauche%20Hilfe%20(Abschleppdienst%20%2F%20Pannenhilfe).",
  city: "Schleswig-Holstein",
  location: "Quickborn · zentral an der A7 / A23",
  area: "Schleswig-Holstein, Hamburg & Umgebung",
  tagline: "Wir bringen Sie weiter!",
  closing: "Ihr zuverlässiger Partner – rund um die Uhr!",
};

export const NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Warum wir", href: "#vorteile" },
  { label: "Fahrzeug", href: "#fahrzeug" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Einsatzgebiet", href: "#einsatzgebiet" },
  { label: "Kontakt", href: "#kontakt" },
];

export const TICKER = [
  "PKW-Abschleppdienst",
  "SUV-Transport",
  "Pannenhilfe",
  "Unfallfahrzeugtransport",
  "Rund um die Uhr",
];

export const SERVICES = [
  { id: "01", title: "PKW-Abschleppdienst", text: "Sicher und schonend – auch bei kleineren Unfällen.", image: PHOTOS.pkw },
  { id: "02", title: "SUV-Transport", text: "Für alle Fahrzeugtypen – vom Kleinwagen bis zum SUV.", image: PHOTOS.suv },
  { id: "03", title: "Pannenhilfe", text: "Vor Ort – schnelle Hilfe bei Panne, Batterie, Reifen u.v.m.", image: PHOTOS.pannenhilfe },
  { id: "04", title: "Unfallfahrzeugtransport", text: "Fachgerecht und zuverlässig.", image: PHOTOS.unfall },
];

export const FEATURES = [
  { title: "Schnelle Reaktionszeit", text: "Ein Anruf genügt. Wir melden uns sofort und machen uns auf den Weg." },
  { title: "Zuverlässiger Service", text: "Wir kommen, wenn wir es zusagen, und liefern Ihr Fahrzeug sicher ab." },
  { title: "Faire & ehrliche Preise", text: "Sie erfahren den Preis vorab am Telefon. Keine versteckten Kosten." },
  { title: "Flexibel & kompetent", text: "Ob Panne, Batterie oder Unfall: Wir finden die passende Lösung." },
];

export const STEPS = [
  { title: "Anrufen", text: "Rufen Sie uns an oder schreiben Sie per WhatsApp. Nennen Sie Standort und Fahrzeug." },
  { title: "Wir kommen", text: "Sie erfahren den Preis vorab. Danach fahren wir direkt zu Ihnen." },
  { title: "Sicher am Ziel", text: "Wir helfen vor Ort oder bringen Ihr Fahrzeug zur Werkstatt oder nach Hause." },
];

export const VEHICLE = {
  title: "Mercedes-Benz ML 270",
  facts: [
    { label: "Baujahr", value: "2002" },
    { label: "Farbe", value: "Silber" },
    { label: "Einsatz", value: "Transport mit Anhänger" },
  ],
  text: "Unser Einsatzfahrzeug ist ein Mercedes ML 270, kräftig und zuverlässig. Mit dem Trailer transportieren wir Ihren PKW oder SUV schonend und sicher.",
  image: PHOTOS.fleet,
};

export const REGIONS = [
  "Quickborn", "Hamburg", "Norderstedt", "Pinneberg", "Elmshorn", "Kaltenkirchen",
  "Henstedt-Ulzburg", "Bad Segeberg", "Neumünster", "Itzehoe",
];
