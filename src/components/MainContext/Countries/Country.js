import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Country = (props) => {
  const themeContext = useContext(ThemeContext);
  const { country } = props;
  return (
    <Link to={`/country/${country.name.common}`}>
      <CountryCard className={themeContext.theme}>
        <div className="flag">
          <img src={country.flag} />
        </div>
        <div className="info">
          <div className="infoName">{country.name.common}</div>
          <div className="description">
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </div>
      </CountryCard>
    </Link>
  );
};

export default Country;
const CountryCard = styledComponents.div`
    width:100%;
    cursor:pointer;
    filter:brightness(1);
    overflow:hidden;
    border-radius:4px;
    margin-bottom:12px;
    user-select:none;
    box-shadow:var(--box-shadow);
    &:hover{
      filter:brightness(0.9)
    }

    &:hover img{
      transform:scale(1.1)
    }

    .flag{
      width:100%;
      height:160px;
      display:block;
      overflow:hidden;
      box-shadow:0 4px 12px rgba(0,0,0,0.2);

      img{
        height:100%;
        object-fit:cover;
        transition:all 0.2s linear;
      }
    }

    .info{
      padding:10px 16px;

      .infoName{
        margin:16px 0;
        font-size:20px;
        font-weight:bold;
        white-space: nowrap;
        display:block;
        max-width:250px;
        overflow:hidden;
        text-overflow:ellipsis;
      }

      .description{
        display:flex;
        flex-direction:column;
        white-space:nowrap;
        font-size:16px;
        font-weight:700;
        
        margin:4px 0;
        p{
        max-width:250px;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        }
        span{
        font-weight:400;
        }
      }
    }
`;
