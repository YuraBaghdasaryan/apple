import React from "react";
import styles from './footer.module.css';
import TwitterIcon from '../../assets/img/Twitter.svg';
import TikTokIcon from '../../assets/img/Tiktok.svg';
import FCIcon from '../../assets/img/Vector.svg';
import InstagramIcon from '../../assets/img/Instagram.svg';
import classNames from "classnames";

const Footer = () => {
  return (

    <div className={styles.footer}>
      <div className={classNames(styles, 'container')}>
        <div className={styles.footer__content}>
          <div className={styles.footer__text_item}>
            <h1 className={styles.footer__text_item__title}>cyber</h1>
            <p className={styles.footer__text_item__description}>
              We are a residential interior design firm located in
              Portland.
              Our boutique-studio offers more than
            </p>
          </div>
          <div className={styles.footer__services}>
            <div className={styles.footer__section_title}>
              <h1>Services</h1>
            </div>
            <div className={styles.footer__section_content}>
              <p>Bonus</p>
              <p>Program</p>
              <p>Gift Cards</p>
              <p>Credit and Payment</p>
              <p>Service contracts</p>
              <p>Non-cash account</p>
            </div>
          </div>
          <div className={styles.footer__assistance}>
            <div className={styles.footer__section_title}>
              <h1>Assistance to the buyer</h1>
            </div>
            <div className={styles.footer__section_content}>
              <p>Find an order</p>
              <p>Terms of delivery</p>
              <p>Exchange and return of goods</p>
              <p>Guarantee</p>
              <p>Frequently asked questions</p>
              <p>Terms of use of the site</p>
            </div>
          </div>
        </div>
        <div className={styles.footer__icons}>
          <button className={styles.footer__icons_button}>
            <img src={TwitterIcon} width={28} height={28} alt="Twitter"/>
          </button>
          <button className={styles.footer__icons_button}>
            <img src={FCIcon} width={28} height={28} alt="Vector"/>
          </button>
          <button className={styles.footer__icons_button}>
            <img src={TikTokIcon} width={28} height={28} alt="TikTok"/>
          </button>
          <button className={styles.footer__icons_button}>
            <img src={InstagramIcon} width={28} height={28}
                 alt="Instagram"/>
          </button>
        </div>
      </div>

    </div>
      );
      }

      export default Footer;
