import React from "react";
import styles from './Prod.module.css'
import Like from "../../../assets/img/Like.svg"
import Iphone from '../../../assets/img/Iphone 14 gold pro 1.png'
import AirPods from '../../../assets/img/AirPods 14 pro 1.png'
import AppleWatch from "../../../assets/img/watch apple.png"
import IphoneWhite from '../../../assets/img//Iphone 14 white pro 1.png'
const Prod = () => {

  return (

    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Discounts up to -50% </h3>
      </div>
      <div className={styles.products_content__all}>
        <div className={styles.products_content}>
          <div className={styles.icons_box}>
            <button>
              <img src={Like} width={30} height={30} alt=""/>
            </button>
          </div>
          <img src={Iphone} width={150} height={150} alt=""/>
          <div className={styles.text__box}>
            <h1>Apple iPhone 14 Pro 512GB Gold (MQ233)</h1>
            <p>$1437</p>
            <div className={styles.btn__box}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={styles.products_content}>
          <div className={styles.icons_box}>
            <button>
              <img src={Like} width={30} height={30} alt=""/>
            </button>
          </div>
          <img src={AirPods} width={150} height={150} alt=""/>
          <div className={styles.text__box}>
            <h1>AirPods Max Silver
              Starlight Aluminium </h1>
            <p>$549</p>
            <div className={styles.btn__box}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={styles.products_content}>
          <div className={styles.icons_box}>
            <button>
              <img src={Like} width={30} height={30} alt=""/>
            </button>
          </div>
          <img src={AppleWatch} width={150} height={150} alt=""/>
          <div className={styles.text__box}>
            <h1>Apple Watch Series 9 GPS 41mm Starlight Aluminium </h1>
            <p>$399</p>
            <div className={styles.btn__box}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={styles.products_content}>
          <div className={styles.icons_box}>
            <button>
              <img src={Like} width={30} height={30} alt=""/>
            </button>
          </div>
          <img src={IphoneWhite} width={150} height={150} alt=""/>
          <div className={styles.text__box}>
            <h1>Apple iPhone 14 Pro 1TB Gold (MQ2V3)</h1>
            <p>$1499</p>
            <div className={styles.btn__box}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
export default Prod
