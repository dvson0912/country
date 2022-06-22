import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styledComponents from "styled-components";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import CountryInfo from "./CountryInfo";
import { getCountryByName } from "../../store/action/CountriesAction";
import Loading from "../../loading/Loading";

const CountryDetail = () => {
  const slug = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Country = useSelector((state) => state.Countries.country);
  const loading = false;

  useEffect(() => {
    dispatch(getCountryByName(slug.countryName));
  }, [slug.countryName, dispatch]);

  return (
    <Wapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          {Country && (
            <>
              <button onClick={() => navigate(-1)}>Go Back</button>
              <div className="infoCountry">
                <div>
                  <img src={Country.flags.png} />
                </div>
                <CountryInfo country={Country} />
              </div>
            </>
          )}
        </>
      )}
    </Wapper>
  );
};

export default CountryDetail;

const Wapper = styledComponents.div`
    padding-top:20px;
    button{
        display:block;
        line-height:28px;
        width:90px;
        padding: 2px 12px;
        font-size:14px;
        border-radius:4px;
        font-weight:500;
        text-align:center;
        opacity:0.9;
        transition:all 0.2s linear;
        &:hover{
            opacity:1;
            font-weight:700;
            cursor:pointer;
            user-select:none;
        }
    }

    .infoCountry{
        display:flex;
        gap:40px;
        flex-direction:row;
        margin-top:30px;

        @media only screen and (max-width:768px){
            flex-direction:column;
            gap:20px;
            align-items:center;
            justify-content:center;
        }
    }

    img{
        width:450px;
        height:300px;
        box-shadow:var(--box-shadow);
    }
`;
