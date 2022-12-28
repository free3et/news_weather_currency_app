import styles from "./Footer.module.scss";
import Map from "../../assets/map.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__contact}>
          <p>КОНТАКТИ РЕДАКЦІЇ</p>
          <a className={styles.footer__contact_email} href="info@abcnews">
            info@abcnews
          </a>
          <a className={styles.footer__contact_phone} href="tel: (0444) 41-39-04">
            (0444) 41-39-04, (067) 810-44-55
          </a>
          <p>РЕКЛАМНИЙ ВІДДІЛ:</p>
          <a className={styles.footer__contact_phone} href="tel: (0444) 41-39-06">
            (0444) 41-39-06
          </a>
        </div>

        <div className={styles.footer__location}>
          <p>Астарта БЦ, вулиця Ярославська, 58, Київ, 04041</p>
          <img className={styles.footer__location_img} src={Map} alt="карта" />
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>© 2022 News Weather Currency Усі права захищені</p>
      </div>
    </div>
  );
};
