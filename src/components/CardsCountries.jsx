import React, { useState, useEffect } from "react";
import CardCountry from "./CardCountry";
import styles from "./CardsCountries.css";

const CardsCountries = ({ setCountryInformation }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //llamada asincrona a la API
    const getCountries = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      setCountries(json);

      // json.forEach((el) => {
      //   //itero sobre el json que obtuve para almacenar solo los datos que quiero en una variable country
      //   let country = {
      //     key: el.alpha2Code,
      //     name: el.name,
      //     subregion: el.subregion,
      //     flag: el.flag,
      //   };

      //   setCountries((countries) => [...countries, country]); //En cada iteración cambio el estado, agregando el país que acabo de guardar
      // });
    };

    let url = "https://restcountries.eu/rest/v2/region/asia";
    getCountries(url);
  }, []); //con ls [] vacías, defino que esto solo se va a hacer una vez al principio cuando el componente estra al estado didMount

  return (
    <div>
      {/* {console.log(countries.name)} */}
      <h2>CardsCountries</h2>
      {!countries ? (
        <h2>Cargando países...</h2>
      ) : (
        countries.map(({ name, subregion, flag, alpha2Code }) => {
          return (
            <CardCountry
              setCountryInformation={setCountryInformation}
              key={alpha2Code}
              name={name}
              subregion={subregion}
              flag={flag}
            />
          );
        })
      )}
      <CardCountry />
    </div>
  );
};

export default CardsCountries;
