import { TESTIMONIALS } from '../../data';

export const Testimonials = () => (
  <section>
    <h2>Client testimonials</h2>

    <div>
      {TESTIMONIALS.map((t, idx) => (
        <article key={`testimonie-${idx}`}>
          <div>
            <img src={t.photo} alt={t.name} />
          </div>
          <p>{t.body}</p>
          <header>
            <h3>{t.name}</h3>
            <span>{t.name}</span>
          </header>
        </article>
      ))}
    </div>
  </section>
);
