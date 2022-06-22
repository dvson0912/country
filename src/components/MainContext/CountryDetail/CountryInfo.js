import axios from "axios";
import React, { useEffect, useState } from "react";
import ColumnInfo from "./ColumnInfo";

const getList = (country, name) => {
  let result = "";
  for (let i in country[name]) {
    if (result === "") {
      result = country[name][i];
    } else result = result + " - " + country[name][i];
  }
  return result;
};

const getAPIBListCode = async (list) => {
  const result = await axios.get(
    `https://restcountries.com/v3.1/alpha?codes=${list}`
  );

  return result.data;
};

const CountryInfo = (props) => {
  const { country } = props;
  const [countriesBorder, setCountryBorder] = useState([]);

  useEffect(() => {
    if (country && country.borders) {
      getAPIBListCode(country.borders.map((item) => item))
        .then((res) => {
          const countryName = res.map((country) => country.name.common);
          setCountryBorder(countryName);
        })
        .catch((err) => console.log(err));
    }
  }, [country]);
  let nativeName = null;

  for (let x in country.name.nativeName) {
    for (let i in country.name.nativeName[x]) {
      nativeName = country.name.nativeName[x][i];
    }
  }

  return (
    <div>
      {country && (
        <>
          <h3 className="title" style={{ fontSize: 32 }}>
            {country.name.common}
          </h3>
          <table>
            <tbody>
              <ColumnInfo name="Native Name" value={nativeName} />
              <ColumnInfo name="Officical" value={country.name.official} />
              <ColumnInfo
                name="population"
                value={new Intl.NumberFormat().format(country.population)}
              />
              <ColumnInfo name="Region" value={country.region} />
              <ColumnInfo name="Sub Region" value={country.subregion} />
              <ColumnInfo name="Captital" value={country.capital[0]} />
              <ColumnInfo
                name="Currencies"
                value={country.currencies[Object.keys(country.currencies)].name}
              />
              <ColumnInfo name="Top Level Domain" value={country.tld[0]} />
              <ColumnInfo
                name="Languages"
                value={getList(country, "languages")}
              />
              <ColumnInfo name="Border Countries" value={countriesBorder} />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CountryInfo;
