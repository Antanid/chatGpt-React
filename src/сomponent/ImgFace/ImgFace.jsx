import React from 'react';
import style from './style.module.scss'

const ImgFace = ({chatFace}) => {
  return (
    <div className={style.wrapperImg}>
      <img className={style.imgFace} src={chatFace} alt='img-face'/>
    </div>
  )
}

export default ImgFace