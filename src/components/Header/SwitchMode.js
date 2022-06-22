import React, { useContext, useState } from "react";

import styles from "./SwitchStyle.module.scss";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { ThemeContext } from "../ThemeContext/ThemeContext";

const SwitchMode = () => {
  const [isSun, setIsSun] = useState(true);
  const themeContext = useContext(ThemeContext);
  console.log(themeContext.theme);
  return (
    <div
      className={styles.toggleButton}
      onClick={() => {
        setIsSun(!isSun);
        themeContext.toggleTheme();
      }}
    >
      <div className={isSun ? styles.icon__sun : styles.icon__moon}>
        {isSun ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
      <div className={isSun ? styles.circle__right : styles.circle__left}></div>
    </div>
  );
};

export default SwitchMode;
