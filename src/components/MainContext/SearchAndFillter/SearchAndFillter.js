import React from "react";
import styledComponents from "styled-components";
import Filter from "./Filter";
import Search from "./Search";

const SearchAndFillter = () => {
  return (
    <SearchAndFillterPane>
      <Search />
      <Filter />
    </SearchAndFillterPane>
  );
};

export default SearchAndFillter;
const SearchAndFillterPane = styledComponents.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;
    padding:20px 0 0;
`;
