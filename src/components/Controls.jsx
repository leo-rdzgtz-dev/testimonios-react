export default function Controls({ onPrev, onNext, onRandom }) {
  return (
    <div className="controls">
      <button type="button" onClick={onPrev}><span aria-hidden="true">← </span>Anterior</button>
      <button type="button" onClick={onNext}>Siguiente<span aria-hidden="true"> →</span></button>
      <button type="button" className="random" onClick={onRandom}>Aleatorio</button>
    </div>
  );
}
