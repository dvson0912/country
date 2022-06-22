import React, { useContext, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styledComponents from "styled-components";
import { getCountryRegion } from "../../store/action/CountriesAction";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import Option from "./Option";

const Filter = () => {
  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const { regionName } = useParams();
  const slug = useParams();

  const handleOption = (e) => {};
  return (
    <FilterPane>
      <h3 className="title">Filter by regions:</h3>
      <SelectPane
        className={themeContext.theme}
        ref={refSelect}
        // onMouseOver={() => {
        //   handleOption();
        // }}
      >
        <div className="select">
          <span>{regionName ? regionName : "All"}</span>
          <FaAngleDown />
        </div>
        <Option icon="GiWorld" />
      </SelectPane>
    </FilterPane>
  );
};

export default Filter;

const FilterPane = styledComponents.div`
  max-width:160px;
  width:100%;
  margin-top:20px;

`;

const SelectPane = styledComponents.div`
  width:100%;
  margin-top:8px;
  position:relative;
  cursor:pointer;

  &:hover ul{
    display:block;
  }

  .select{
    padding:0 8px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:4px;
    height:34px;
    user-select:none;
    span{
      font-size:18px;
      font-weight:bold;
    }
  }
`;

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
