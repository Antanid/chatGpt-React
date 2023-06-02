import React from "react";
import style from './style.module.scss'

const Search = ({prompt, onChangeInput, handleSubmit, loading, GptIcon}) => {
  return (
    <div className={style.wrapper}>
      <img className={loading ? style.imgIconLoading : style.imgIcon} src={GptIcon} alt='chatGpt-Icon'/>
      <input
      className={style.input}
      onChange={onChangeInput}
      value={prompt}
      placeholder="Type here.."
      />
      <div className={style.buttDiv}>
      <button className={style.button} onClick={handleSubmit}>Ask</button>
      </div>
    </div>
  );
};

export default Search;
