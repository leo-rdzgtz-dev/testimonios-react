import { useState } from 'react';
import testimonios from './data.js';
import Testimonial from './components/Testimonial.jsx';
import Controls from './components/Controls.jsx';

export default function App() {
  const [index, setIndex] = useState(0);
  const total = testimonios.length;

  function next() {
    if (total === 0) return;
    setIndex(actual => (actual + 1) % total);
  }
  function prev() {
    if (total === 0) return;
    setIndex(actual => (actual - 1 + total) % total);
  }
  function random() {
    if (total < 2) return;
    // El salto nunca es cero, así que no repite el registro actual.
    const salto = 1 + Math.floor(Math.random() * (total - 1));
    setIndex(actual => (actual + salto) % total);
  }

  return (
    <main className="app">
      <header><p className="eyebrow">VOCES DE NUESTRA COMUNIDAD</p>
        <h1>Experiencias de<br />nuestros usuarios<span>.</span></h1>
        <p className="intro">Personas, proyectos y nuevas formas de trabajar.</p>
      </header>
      {total === 0 ? <p className="empty">No hay testimonios disponibles.</p> : (
        <>
          <Testimonial item={testimonios[index]} />
          <Controls onPrev={prev} onNext={next} onRandom={random} />
          <p className="counter" aria-live="polite">Testimonio {index + 1} de {total}</p>
        </>
      )}
      <footer>Testimonios ficticios con fines de demostración.</footer>
    </main>
  );
}
