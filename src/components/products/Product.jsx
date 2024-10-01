import React from 'react';
import styles from './Product.module.css'
import Like from "../../../assets/img/Like.svg"
import Iphone from "../../../assets/img/Iphone 14 pro 1.png"
import Camera from '../../../assets/img/Camera  14 pro 1.png'
import Watch from '../../../assets/img/Iphone watch pro 1.png'
import AirPods from '../../../assets/img/AirPods 14 pro 1.png'
import WatchGreen from '../../../assets/img/watch green.png'
import Galaxy from '../../../assets/img/galaxy phone.png'
import redIcon from '../../../assets/img/Favorite_duotone.svg'
import GalaxyyAirPods from  '../../../assets/img/Galaxy Buds fe.png'
import Ipad from  '../../../assets/img/Ipad.png'

const Product = () => {
  return (
    <div className={styles.content__product}>
      {/*<div className={styles.product__box}>*/}
      {/*  <p>New Arrival</p>*/}
      {/*  <p>Bestseller</p>*/}
      {/*  <p>Featured Products</p>*/}
      {/*</div>*/}
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={Like} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={Iphone} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>Apple iPhone 14 Pro Max
              128GB Deep Purple </p>
            <h3 className={styles.title__prod}>$900</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={Like} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={Camera} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>
              Blackmagic Pocket Cinema Camera 6k </p>
            <h3 className={styles.title__prod}>$2535</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={Like} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={Watch} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>
              Apple Watch Series 9 GPS 41mm Starlight Aluminium </p>
            <h3 className={styles.title__prod}>$399</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={Like} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={AirPods} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>
              AirPods Max Silver
              Starlight Aluminium </p>
            <h3 className={styles.title__prod}>$549</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={Like} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={WatchGreen} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>
              Samsung Galaxy Watch6 Classic 47mm Black
            </p>
            <h3 className={styles.title__prod}>$369</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={redIcon} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={Galaxy} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>
              Galaxy Z Fold5 Unlocked | 256GB | Phantom Black </p>
            <h3 className={styles.title__prod}>$1799</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={Like} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={GalaxyyAirPods} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>
              Galaxy Buds FE
              Graphite </p>
            <h3 className={styles.title__prod}>$99.99</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.prod_box}>
        <div className={styles.product_cont}>
          <div className={styles.icons_box}>
            <div className={styles.Like_Box_img}>
              <img src={Like} width={32} height={32} alt=""/>
            </div>
          </div>
          <div className={styles.Iphone_img_box}>
            <img src={Iphone} width={160} height={160} alt=""/>
          </div>
          <div className={styles.prod__text__box}>
            <p className={styles.prod__text_item}>
              Apple iPad 9 10.2" 64GB Wi-Fi
              Silver (MK2L3) 2021 </p>
            <h3 className={styles.title__prod}>$398</h3>
          </div>
          <div className={styles.box__button}>
            <button className={styles.button_prod}>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;