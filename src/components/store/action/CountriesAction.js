import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_REGION_NAME,
  GET_COUNTRY_BY_SEARCH,
  SET_LOADING,
} from "../type";

const countriesApi = "https://restcountries.com/v3.1/";

export const getCountries = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  await axios
    .get(countriesApi + "all")
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flags.png,
      }));
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRIES, payload: countries });
    })
    .catch((err) => console.log(err));
};
export const getCountryByName = (name) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  await axios
    .get(countriesApi + `name/${name}`)
    .then((res) => {
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRY_BY_NAME, payload: res.data[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCountryRegion = (regionName) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  await axios
    .get(countriesApi + `region/${regionName}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flags.png,
      }));
      dispatch({ type: SET_LOADING, payload: false });
      dispatch({ type: GET_COUNTRY_BY_REGION_NAME, payload: countries });
    })
    .catch((err) => console.log(err));
};

export const getCountriesBySearch = (name) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  await axios
    .get(countriesApi + `name/${name}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flags.png,
      }));
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRY_BY_SEARCH, payload: countries });
    })
    .catch((err) => console.log(err));
};
