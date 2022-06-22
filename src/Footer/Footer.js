import React from "react";
import styledComponents from "styled-components";

const Footer = () => {
  return (
    <StyleFooter>
      <h3>Copyright Son Dao</h3>
      <p>dvson0912@gmail.com</p>
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styledComponents.div`
    display:flex;
    position:fixed;
    background:white;
    box-shadow:var(--box-shadow);
    flex-direction:column;
    bottom:0;
    right:0;
    left:0;
    height:10vh;
    align-items:center;
    justify-content:center;

    h3{
        letter-spacing:2px;
    }
`;
