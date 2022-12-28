import facebook from "../../assets/header/facebook.png";
import instagram from "../../assets/header/instagram.png";
import linkedin from "../../assets/header/linkedin.png";
import google from "../../assets/header/google_plus.png";
import pinterest from "../../assets/header/pinterest.png";
import skype from "../../assets/header/skype.png";
import twitter from "../../assets/header/twitter.png";
import styles from "./Header.module.scss";

export const Header = () => {
  const date = new Intl.DateTimeFormat("ua", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <header className={styles.header}>
      <div className={styles.logo_portal}>
        <ul className={styles.logo}>
          <li className={styles.logo_letter}>A</li>
          <li className={styles.logo_letter}>B</li>
          <li className={styles.logo_letter}>C</li>
        </ul>
        <span>NEWS</span>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.social_network}>
        <ul>
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pinterest} alt="pinterest" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={skype} alt="skype" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={google} alt="google plus" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
