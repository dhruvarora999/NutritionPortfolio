import "./portfolio.scss";
import { aboutMe, offerings } from "../../data";

const ICONS8 = {
  dietFallback: "https://img.icons8.com/color/96/vegetarian-food.png",
  imageFallback: "https://img.icons8.com/color/96/image.png",
};

export default function Portfolio() {
  const about = aboutMe[0];

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio-title">Portfolio</h1>

      <section className="portfolio-section portfolio-section--about">
        <h2 className="section-heading">About Me</h2>
        <div className="content-data-item">
          <div className="content-title">{about.title}</div>
          <div className="content-subtext">{about.subtext}</div>
          <div className="img-container">
            {about.images.map((src, i) => (
              <img
                key={i}
                className="content-img"
                src={src}
                alt=""
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = ICONS8.imageFallback;
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section portfolio-section--services">
        <h2 className="section-heading">Our Services</h2>
        <div className="portfolio-container portfolio-container--services">
          {offerings.map((d) => (
            <div key={d.id} className="service-card">
              <div className="service-card-image-wrap">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = ICONS8.dietFallback;
                  }}
                />
              </div>
              <h3 className="service-card-title">{d.title}</h3>
              {d.desc && <p className="service-card-desc">{d.desc}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
