import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nikish Mahajan",
      title: "Student",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "I read a lot about Healthy Diet and its benifits and got in touch with Sapna. I still thinks that was the best decision of my life. My lifestyle has taken a 180 degree turn and I'm enjoying it without Upsetting my tastebuds."
    },
    {
      id: 2,
      name: "Nikish Mahajan",
      title: "Student",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "I read a lot about Healthy Diet and its benifits and got in touch with Sapna. I still thinks that was the best decision of my life. My lifestyle has taken a 180 degree turn and I'm enjoying it without Upsetting my tastebuds."
    },
    {
      id: 3,
      name: "Nikish Mahajan",
      title: "Student",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "I read a lot about Healthy Diet and its benifits and got in touch with Sapna. I still thinks that was the best decision of my life. My lifestyle has taken a 180 degree turn and I'm enjoying it without Upsetting my tastebuds."
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
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
