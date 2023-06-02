import React from "react";
import style from "./style.module.scss";

const Response = ({ response, loading }) => {
  return (
    <div className={style.wrapper}>
      {loading ? "Loading" : response ? <h4 className={style.textRes}>{response}</h4> : null}
    </div>
  );
};

export default Response;
