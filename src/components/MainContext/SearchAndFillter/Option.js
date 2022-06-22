import { ThemeContext } from "../../ThemeContext/ThemeContext";

import React, { useContext } from "react";
import styledComponents from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Option = (props) => {
  const themeContext = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleValueOption = (item) => {
    if (item.name !== "All") {
      navigate(`/region/${item.name}`);
    } else {
      navigate(`/`);
    }
  };
  const data = [
    {
      icon: "GiWorld",
      name: "All",
    },
    {
      icon: "FaGlobeAfrica",
      name: "Africa",
    },
    {
      icon: "FaGlobeAmericas",
      name: "Americas",
    },
    {
      icon: "FaGlobeAsia",
      name: "Asia",
    },
    {
      icon: "FaGlobeEurope",
      name: "Europe",
    },
    {
      icon: "GiEarthAsiaOceania",
      name: "Oceania",
    },
  ];
  return (
    <Menu className={themeContext.theme}>
      {data.map((item, index) => {
        return (
          // <Link to={``}>
          <li key={index} onClick={() => handleValueOption(item)}>
            <span>{item.name}</span>
          </li>
          // </Link>
        );
      })}
    </Menu>
  );
};

export default Option;

const Menu = styledComponents.ul`
  width:100%;
  margin-top:2px;
  border-radius:4px;
  position:absolute;
  z-index:9;
  display:none;

  &::after{
    content:'';
    width:100%;
    height:4px;
    position:absolute;
    top:-4px;
  }

  li{
    display:flex;
    align-items:center;
    font-size:18px;
    cursor:pointer;
    padding:4px 8px;
    &:hover{
      font-weight:bold;
      background:var(--option-background-color)
    }

    span{
      margin-left:4px;
    }
  }
`;
