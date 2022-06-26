import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://img.icons8.com/color/48/000000/trophy.png",
      title: "Miss Diva Dwarka",
      desc: "Won the competition held for Miss Diva",
      img: "assets/winner.png"
    },
    {
      id: "2",
      icon: "https://img.icons8.com/color/48/000000/policeman-male--v1.png",
      title: "Harayan Police Association",
      desc: "We're officilly associated with Harayana police",
      img: "assets/police.png"
    },
    {
      id: "3",
      icon: "https://img.icons8.com/bubbles/50/000000/certificate.png",
      title: "Certified",
      desc: "We're certified by Chamber of Industry & Trade",
      img: "assets/certificate.jpeg"
    },
    {
      id: "4",
      icon: "https://img.icons8.com/bubbles/50/000000/certificate.png",
      title: "Rejuvenating with Indian culture",
      desc: "ANSH - A network of Sensitive Humans",
      img: "assets/ansh.jpeg"
    },
    {
      id: "5",
      icon: "https://img.icons8.com/bubbles/50/000000/certificate.png",
      title: "Contibutions to WICCI",
      desc: "We're certified by WICCI",
      img: "assets/wicci.jpeg"
    },
    {
      id: "5",
      icon: "https://img.icons8.com/bubbles/50/000000/certificate.png",
      title: "IIFA Awardee",
      desc: "Celebrity Brand award at IIFA",
      img: "assets/iifa.jpeg"
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>Achievements</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2 className="data-title">{d.title}</h2>
                  <p className="data-desc">{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img className="main-image" src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
