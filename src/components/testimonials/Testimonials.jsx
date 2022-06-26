import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nikish",
      title: "Student",
      img: "https://img.icons8.com/emoji/48/000000/man.png",
      icon: "assets/twitter.png",
      desc:
        "I read a lot about Healthy Diet and its benifits and got in touch with Sapna. I still thinks that was the best decision of my life. My lifestyle has taken a 180 degree turn and I'm enjoying it without Upsetting my tastebuds"
    },
    {
      id: 2,
      name: "Kanika",
      title: "Housewife",
      img: "https://img.icons8.com/emoji/48/000000/woman-head-emoji.png",
      icon: "assets/twitter.png",
      desc:
        "Trust me after taking diet I feel energised whole day long. The results are amazing even though I enjoyed cheat meals"
    },
    {
      id: 3,
      name: "Nitika",
      title: "Entrepreneur",
      img: "https://img.icons8.com/emoji/48/000000/woman-head-emoji.png",
      icon: "assets/twitter.png",
      desc:
        "Very easy Diet. Everything is readily available in the kitchen. I can rely on diet and still enjoy my cheat days "
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="testimonial-title">Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
