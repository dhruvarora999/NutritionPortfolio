import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img className="company-logo" src="assets/companylogo.png" alt="" />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9643066282</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:mahajansapna005@gmail.com">
              mahajansapna005@gmail.com
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
