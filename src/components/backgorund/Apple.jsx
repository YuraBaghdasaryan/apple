import React from "react";
import style from './Apple.module.css'

import AppleBg from '../../assets/img/white_Bg_apple.jpg'
const Apple=()=>{
  return(
      <div className={style.content}>
        <img src={AppleBg} width={1440} height={850} alt="Apple_BG"/>
      </div>
  )
}
export default  Apple