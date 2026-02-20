import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/PHOTO-2026-02-20-18-07-05.jpg" alt="Sapna Mahajan" onError={(e) => { e.target.onerror = null; e.target.src = "https://img.icons8.com/color/96/vegetarian-food.png"; }} />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sapna Mahajan</h1>
          <h3>Health Expert, Nutritionist</h3>
        </div>
        <a href="#portfolio" aria-label="Scroll to portfolio">
          <img src="/assets/down.png" alt="" onError={(e) => { e.target.onerror = null; e.target.src = "https://img.icons8.com/ios-filled/50/000000/down.png"; }} />
        </a>
      </div>
    </div>
  );
}
