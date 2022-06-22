import React, { useEffect } from "react";
import styledComponents from "styled-components";
import Country from "./Country";
import {
  getCountries,
  getCountriesBySearch,
  getCountryRegion,
} from "../../store/action/CountriesAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../loading/Loading";

const Countries = () => {
  const dispatch = useDispatch();
  const slug = useParams();
  const countries = useSelector((state) => state.Countries.countries);
  const loading = useSelector((state) => state.Countries.loading);

  useEffect(() => {
    if (slug.regionName) {
      dispatch(getCountryRegion(slug.regionName));
      console.log(slug);
    } else if (slug.valueInput) {
      dispatch(getCountriesBySearch(slug.valueInput));
    } else {
      console.log(slug);
      dispatch(getCountries());
    }
  }, [dispatch, slug.regionName, slug.valueInput]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CountriesContainer>
          {countries.map((country, index) => (
            <Country country={country} key={index} />
          ))}
        </CountriesContainer>
      )}
    </>
  );
};

export default Countries;

const CountriesContainer = styledComponents.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    padding:4px 1px;

    @media screen and (max-width:1023px){
        grid-template-columns:repeat(3,1fr);
        gap:10px;
    }
    @media screen and (max-width:768px){
        grid-template-columns:repeat(2,1fr);
        gap:10px
    }
`;
