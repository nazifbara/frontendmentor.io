import { SERVICES } from '../../data';

export const Services = () => (
  <section>
    {SERVICES.slice(0, 2).map((s, idx) => (
      <article key={`featured-service-${idx}`}>
        <div>
          <h2>{s.heading}</h2>
          <p>{s.description}</p>
          <a href="/#">Learn more</a>
        </div>

        <figure>
          <img src={s.desktopImage} alt="" />
        </figure>
      </article>
    ))}

    <div>
      {SERVICES.slice(3).map((s, idx) => (
        <article key={`service-${idx}`}>
          <h2>{s.heading}</h2>
          <p>{s.description}</p>
        </article>
      ))}
    </div>
  </section>
);
