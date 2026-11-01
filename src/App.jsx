import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Services from "./components/Services";
import Features from "./components/Features";
import Fleet from "./components/Fleet";
import Process from "./components/Process";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCall from "./components/StickyCall";

export default function App() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      {!heroReady && (
        <div className="site-loader" role="status" aria-live="polite">
          <span className="site-loader__mark">M.T.</span>
          <span className="site-loader__text">Wird geladen ...</span>
        </div>
      )}
      <Navbar />
      <main>
        <Hero onImageReady={() => setHeroReady(true)} />
        <Ticker />
        <Services />
        <Features />
        <Fleet />
        <Process />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
