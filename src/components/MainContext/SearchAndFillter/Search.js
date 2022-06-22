import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import styledComponents from "styled-components";

const Search = () => {
  const [valueInput, setValueInput] = useState("");
  const navigate = useNavigate();
  return (
    <SearchPane>
      <h3 className="title">Search Country:</h3>
      <SearchElement>
        <input
          onChange={(e) => setValueInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              valueInput !== ""
                ? navigate(`search/${valueInput}`)
                : navigate("/");
            }
          }}
          type="text"
          placeholder="Input the and enter to search..."
        />
        <div
          style={{
            width: "40px",
            height: "100%",
            background: "#aaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Link to={valueInput === "" ? "/" : `search/${valueInput}`}>
            <BsSearch className="icon" />
          </Link>
        </div>
      </SearchElement>
    </SearchPane>
  );
};

export default Search;

const SearchPane = styledComponents.div`
    max-width:320px;
    width:100%;
`;

const SearchElement = styledComponents.div`
    margin-top:8px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:34px;
    background:#fff;
    box-shadow:var(--box-shadow);
    position:relative;
    border-radius:4px;
    overflow:hidden;

    input{
      border:none;
      width:100%;
      font-size:16px;
      padding:0 10px;
      cursor:text;
    }

    .icon{
      opacity:0.5;
      font-size:19px;
      color:black;
      &:hover{
        opacity:1;
      }
    }
`;
