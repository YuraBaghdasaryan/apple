import React from "react";
import styles from './SmallBanners.module.css'
import watch from '../../../assets/img/image watch 12.png'
import pods from '../../../assets/img/image pods 39.png';
import  Group from '../../../assets/img/Group 1.png'
import  Ipad from '../../../assets/img/image 64.png'
import  GalaxyPhone from '../../../assets/img/image 41.png'
import  Mac  from '../../../assets/img/Macbook 1.png'

const SmallBanners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__img}>
          <img src={Group} width={164} height={186} alt=""/>
          {/*  <img src={watch} width={200} height={200} alt=""/>*/}
          {/*<img src={pods} width={200} height={200} alt=""/>*/}
        </div>
        <div className={styles.content__items}>
          <h1>Popular Products</h1>
          <p>iPad combines a magnificent 10.2-inch Retina display,
            incredible performance, multitasking and ease of use.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__img}>
          <img src={Ipad} width={200} height={200} alt=""/>
          {/*  <img src={watch} width={200} height={200} alt=""/>*/}
          {/*<img src={pods} width={200} height={200} alt=""/>*/}
        </div>
        <div className={styles.content__items}>
          <h1> Ipad Pro</h1>
          <p>iPad combines a magnificent 10.2-inch Retina display,
            incredible performance, multitasking and ease of use.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__img}>
          <img src={GalaxyPhone} width={220} height={200} alt=""/>
          {/*  <img src={watch} width={200} height={200} alt=""/>*/}
          {/*<img src={pods} width={200} height={200} alt=""/>*/}
        </div>
        <div className={styles.content__items}>
          <h1>Popular Products</h1>
          <p>iPad combines a magnificent 10.2-inch Retina display,
            incredible performance, multitasking and ease of use.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__img}>
          <img src={Mac} width={220} height={230} alt=""/>
          {/*  <img src={watch} width={200} height={200} alt=""/>*/}
          {/*<img src={pods} width={200} height={200} alt=""/>*/}
        </div>
        <div className={styles.content__items}>
          <h1 className={styles.title}>Popular Products</h1>
          <p>iPad combines a magnificent 10.2-inch Retina display,
            incredible performance, multitasking and ease of use.</p>
          <button className={styles.btn}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}
export default SmallBanners;