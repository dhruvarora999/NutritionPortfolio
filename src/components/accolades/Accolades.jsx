import "./accolades.scss";

const ICONS8_MEDAL = "https://img.icons8.com/color/96/medal2.png";
const accoladesData = [
  {
    id: 1,
    src: "/assets/PHOTO-2026-02-20-17-47-15-2.jpg",
    alt: "100 Women Honor – National Excellence Women Awards, Femmetimes Republic Day 2026",
  },
  {
    id: 2,
    src: "/assets/PHOTO-2026-02-20-17-47-15.jpg",
    alt: "Certificate of Appreciation – 100 Women, One Nation, National Icons Republic Day Edition 2026",
  },
  {
    id: 3,
    src: "/assets/PHOTO-2026-02-20-18-07-07%202.jpg",
    alt: "Divya Bhaskar – Hack the Tank 2.0 panel at SVNIT, featuring Sapna Mahajan",
  },
];

export default function Accolades() {
  return (
    <div className="accolades" id="accolades">
      <h1 className="accolades-title">Accolades & Recognition</h1>
      <div className="accolades-grid">
        {accoladesData.map((item) => (
          <div key={item.id} className="accolades-card">
            <img
              src={item.src}
              alt={item.alt}
              className="accolades-img"
              onError={(e) => { e.target.onerror = null; e.target.src = ICONS8_MEDAL; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
