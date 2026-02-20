import "./testimonials.scss";

const quoteTestimonials = [
  { id: 1, name: "Deepika", title: "Client", desc: "This is how one looks when they lose 7 kgs in 2 months, without starving, with exercising to keep oneself fit and most importantly happy. Thanks Sapna." },
  { id: 2, name: "Nikish", title: "Student", desc: "I read a lot about Healthy Diet and its benefits and got in touch with Sapna. I still think that was the best decision of my life. My lifestyle has taken a 180 degree turn and I'm enjoying it without upsetting my taste buds." },
  { id: 3, name: "Kanika", title: "Housewife", desc: "Trust me after taking the diet I feel energised the whole day. The results are amazing even though I enjoyed cheat meals." },
  { id: 4, name: "Nitika", title: "Entrepreneur", desc: "Very easy diet. Everything is readily available in the kitchen. I can rely on the diet and still enjoy my cheat days." }
];

const ICONS8_IMAGE = "https://img.icons8.com/color/96/camera--v1.png";
const visualTestimonials = [
  { id: "v1", src: "/assets/PHOTO-2026-02-20-18-07-07.jpg", caption: "Transformation – 2 months" },
  { id: "v2", src: "/assets/PHOTO-2026-02-20-18-07-06.jpg", caption: "Client results" }
];

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="testimonial-title">Testimonials</h1>
      <div className="testimonials-visual">
        {visualTestimonials.map((t) => (
          <figure key={t.id} className="testimonial-figure">
            <img src={t.src} alt={t.caption} loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = ICONS8_IMAGE; }} />
            <figcaption>{t.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="testimonials-grid">
        {quoteTestimonials.map((d) => (
          <article key={d.id} className="testimonial-card">
            <blockquote className="testimonial-quote">{d.desc}</blockquote>
            <footer className="testimonial-footer">
              <span className="testimonial-name">{d.name}</span>
              <span className="testimonial-role">{d.title}</span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
