import { useState } from "react";
import "./works.scss";

const data = [
  { id: "1", icon: "https://img.icons8.com/color/48/000000/trophy.png", title: "Miss Diva Dwarka", desc: "Won the competition held for Miss Diva" },
  { id: "2", icon: "https://img.icons8.com/color/48/000000/policeman-male--v1.png", title: "Haryana Police Association", desc: "Officially associated with Haryana police" },
  { id: "3", icon: "https://img.icons8.com/bubbles/50/000000/certificate.png", title: "Chamber Certified", desc: "Chamber of Industry & Trade" },
  { id: "4", icon: "https://img.icons8.com/bubbles/50/000000/certificate.png", title: "ANSH", desc: "Rejuvenating with Indian culture" },
  { id: "5", icon: "https://img.icons8.com/bubbles/50/000000/certificate.png", title: "WICCI", desc: "Certified by WICCI" },
  { id: "6", icon: "https://img.icons8.com/bubbles/50/000000/certificate.png", title: "IIFA Awardee", desc: "Celebrity Brand award" },
];

export default function Works() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, data.length - visibleCount);

  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const visible = data.slice(index, index + visibleCount);
  if (visible.length < visibleCount && index > 0) {
    visible.push(...data.slice(0, visibleCount - visible.length));
  }

  return (
    <div className="works" id="works">
      <h1>Achievements</h1>
      <div className="works-carousel">
        <button type="button" className="works-arrow left" aria-label="Previous" onClick={goPrev}>
          <img src="/assets/arrow.png" alt="" onError={(e) => { e.target.onerror = null; e.target.src = "https://img.icons8.com/ios-filled/50/000000/chevron-left.png"; }} />
        </button>
        <div className="works-cards">
          {(visible.length ? visible : data.slice(0, visibleCount)).map((d) => (
            <div key={d.id} className="works-card">
              <div className="works-card-icon">
                <img src={d.icon} alt="" />
              </div>
              <h3 className="works-card-title">{d.title}</h3>
              <p className="works-card-desc">{d.desc}</p>
            </div>
          ))}
        </div>
        <button type="button" className="works-arrow right" aria-label="Next" onClick={goNext}>
          <img src="/assets/arrow.png" alt="" onError={(e) => { e.target.onerror = null; e.target.src = "https://img.icons8.com/ios-filled/50/000000/chevron-right.png"; }} />
        </button>
      </div>
    </div>
  );
}
