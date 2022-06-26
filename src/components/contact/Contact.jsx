import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const communicationChannel = [
    {
      id: 1,
      title: "Phone",
      img: "https://img.icons8.com/nolan/64/phone.png",
      href: "tel:+919643066282"
    },
    {
      id: 2,
      title: "Mail",
      img: "https://img.icons8.com/nolan/64/apple-mail.png",
      href: "mailto:mahajansapna005@gmail.com"
    },
    {
      id: 3,
      title: "Instagram",
      img: "https://img.icons8.com/nolan/64/instagram-new.png",
      href:
        "https://www.instagram.com/invites/contact/?i=y28u6ugxntic&utm_content=ktnxnoi"
    },
    {
      id: 4,
      title: "Facebook",
      img: "https://img.icons8.com/nolan/64/facebook-new.png",
      href: "https://www.facebook.com/SapnaMahajan.FTS.ggn/"
    }
  ];
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Want to connect? Get in touch with me</h2>
        <div className="channels">
          {communicationChannel.map((channel) => (
            <a href={channel.href} target="_blank">
              <img src={channel.img}></img>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
