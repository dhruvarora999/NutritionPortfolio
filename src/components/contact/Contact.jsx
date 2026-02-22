import "./contact.scss";

export default function Contact() {
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
      <div className="contact-content">
        <div className="contact-visual">
          <img src="/assets/shake.svg" alt="" aria-hidden="true" onError={(e) => { e.target.onerror = null; e.target.src = "https://img.icons8.com/color/96/handshake.png"; }} />
        </div>
        <div className="contact-actions">
          <h2>Get in touch</h2>
          <p className="contact-tagline">Want to connect? Reach out for consultations and diet plans.</p>
          <div className="channels">
            {communicationChannel.map((channel) => (
              <a key={channel.id} href={channel.href} target="_blank" rel="noopener noreferrer" aria-label={channel.title} className="channel-link">
                <img src={channel.img} alt="" />
                <span>{channel.title}</span>
              </a>
            ))}
          </div>
          <a href="#intro" className="back-to-top">Back to top</a>
        </div>
      </div>
    </div>
  );
}
