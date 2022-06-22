import clsx from "clsx";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import styles from "./CountryDetail.module.scss";

const ColumnInfo = (props) => {
  const themeContext = useContext(ThemeContext);
  const { name, value } = props;
  return (
    <tr>
      <td className={styles.countryInfo__title}>{name}</td>
      <td>:</td>
      <td
        className={
          name === "Border Countries"
            ? styles.borderList
            : styles.countryInfo__value
        }
      >
        {name !== "Border Countries"
          ? value
          : value.map((item, index) => {
              return (
                <Link to={`/country/${item}`} key={index}>
                  <div className={clsx(styles.borderItem, themeContext.theme)}>
                    {item}
                  </div>
                </Link>
              );
            })}
      </td>
    </tr>
  );
};

export default ColumnInfo;
