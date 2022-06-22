import React, { useContext } from "react";
import styled from "styled-components";
import SwitchMode from "./SwitchMode";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <HeaderPane className={themeContext.theme}>
      <Link to={"/"}>
        <span>Where in the world?</span>
      </Link>
      <SwitchMode />
    </HeaderPane>
  );
};

export default Header;

const HeaderPane = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 10;
  box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 70%);

  span {
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    color: black;
    user-select: none;
  }
`;
