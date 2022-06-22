import React from "react";
import styledComponents from "styled-components";
import Countries from "./Countries";
import CountryDetail from "./CountryDetail/CountryDetail";
import SearchAndFillter from "./SearchAndFillter/SearchAndFillter";

const MainContext = () => {
  return (
    <div>
      <SearchAndFillter />
      <Countries />
      {/* <CountryDetail /> */}
    </div>
  );
};

export default MainContext;
