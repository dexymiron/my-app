import React from "react";
import preloader from "../../../assets/images/preloader1.svg"
import n from "./preloader.module.scss";


let Preloader = (props) => {
  
  return (
    <div>
      <img src={preloader} className={n.img}/> 

    </div>
  );
};

export default Preloader;
