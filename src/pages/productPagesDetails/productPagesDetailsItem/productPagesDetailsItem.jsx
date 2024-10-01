import React from 'react';
import starss from "../../../assets/img/StarsSS.png";
import styles from "../ProductPagesDetails.module.css";


const ProductPagesDetailsItem = ({ title, proc, number }) => {
  return (
    <div className={styles.reviews__content}>
      <div className={styles.reviews__content__item}>
        <div className={styles.overall__rating__item}>
          <h1 className={styles.title__overall__item}>4.8</h1>
          <p className={styles.description__overall__item}>of 125 reviews</p>
          <img src={starss} alt="Stars" />
        </div>
        <div className={styles.all__wrapper__colors}>
          <div className={styles.all__content__colors}>
            <div className={styles.colors__title}>
              <p className={styles.colors__title__list}>{title}</p>
            </div>
            <div className={styles.color__box}>
              <div className={styles.boxItem}>{proc}</div>
              <p>{number}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPagesDetailsItem;