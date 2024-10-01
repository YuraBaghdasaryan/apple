import React from 'react';
import icons from "../../../assets/img/Arrow`s.svg"
import styles from './Category.module.css'
import phone from '../../../assets/img/Phones.svg'
import SmartWatches from "../../../assets/img/Smart Watches.svg"
import Cameras from '../../../assets/img/Cameras.svg'
import HeadPhones from '../../../assets/img/Headphones.svg'
import Computers from '../../../assets/img/Computers.svg'
import Gaming from '../../../assets/img/Gaming.svg'

const Category = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__box}>
        <p>Browse By Category</p>
        <img src={icons} width={52} height={22} alt="prev-next"/>
      </div>
      <div className={styles.box_category}>
        <div>
          <img src={phone} alt="" width={40} height={40}/>
          <p>Phones</p>
        </div>
        <div>
          <img src={SmartWatches} width={40} height={40} alt=""/>
          <p>Smart Watches</p>
        </div>
        <div>
          <img src={Cameras} width={40} height={40} alt=""/>
          <p>Cameras</p>
        </div>
        <div>
          <img src={HeadPhones} alt="" width={40} height={40}/>
          <p>Head Phones</p>
        </div>
        <div>
          <img src={Computers} width={45} height={45} alt=""/>
          <p>Computers</p>
        </div>
        <div>
          <img src={Gaming} width={40} height={40} alt=""/>
          <p>Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Category;