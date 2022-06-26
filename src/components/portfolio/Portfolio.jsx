import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { aboutMe, offerings, sucessStories } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("about");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "about",
      title: "About Me"
    },
    {
      id: "offerings",
      title: "Our Services"
    },
    {
      id: "sucessStories",
      title: "Success Stories"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "about":
        setData(aboutMe);
        break;
      case "offerings":
        setData(offerings);
        break;
      case "sucessStories":
        setData(sucessStories);
        break;
      default:
        setData(aboutMe);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="potfolio-container">
        {data.map((d) =>
          d.contentOnly ? (
            <div className="content-data-item">
              <div className="content-title">{d.title}</div>
              <div className="content-subtext">{d.subtext}</div>
              <div className="img-container">
                <img className="content-img" src={d.img} alt="" />
                <img className="content-img" src={d.img2} alt="" />
              </div>
            </div>
          ) : (
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          )
        )}
      </div>
    </div>
  );
}
