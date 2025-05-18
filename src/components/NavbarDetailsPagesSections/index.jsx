import React from "react";
import styles from "./index.module.scss";

const NavbarDetailsPagesSections = ({ imgsrc, title, layerBg }) => {
  return (
    <>
      <div className={styles.title_container}>
        <div className={styles.layer_bg} style={{ backgroundColor: layerBg }} />
        <h2>{title}</h2>
      </div>

      <div className={styles.bg_contaienr}>
        <img src={imgsrc} alt="" />
        {/* <div className="desktop">
          <img src={imgsrc} alt="" className={styles.layer_img} />
        </div> */}
      </div>
    </>
  );
};

export default NavbarDetailsPagesSections;
