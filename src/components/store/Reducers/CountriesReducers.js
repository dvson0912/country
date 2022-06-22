import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_REGION_NAME,
  GET_COUNTRY_BY_SEARCH,
  SET_LOADING,
} from "../type";

const CountriesReducersState = {
  countries: [],
  country: null,
  loading: false,
};

const CountriesReducers = (
  state = CountriesReducersState,
  { type, payload }
) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };
    case GET_COUNTRY_BY_NAME:
      return { ...state, country: payload };
    case GET_COUNTRY_BY_REGION_NAME:
      return { ...state, countries: payload };
    case GET_COUNTRY_BY_SEARCH:
      return { ...state, countries: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default CountriesReducers;
