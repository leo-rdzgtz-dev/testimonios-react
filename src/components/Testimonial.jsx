export default function Testimonial({ item }) {
  const { nombre, cargo, texto, foto } = item;
  return (
    <article className="testimonial-card">
      <span className="quote-mark" aria-hidden="true">“</span>
      <blockquote>{texto}</blockquote>
      <div className="person">
        <img className="testimonial-photo" src={foto}
          alt={`Retrato ilustrativo de ${nombre}`} width="72" height="72"
          onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = './avatar.svg'; }} />
        <div><h2>{nombre}</h2><p className="testimonial-role">{cargo}</p></div>
      </div>
    </article>
  );
}
