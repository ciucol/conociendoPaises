import React from "react";
import CountryInformation from "./components/CountryInformation";
import CardsCountries from "../../components/CardsCountries";
// import NavBar from "../../components/NavBar";
// import Search from "../../components/Search";

import { useState } from "react";

const Countries = () => {
  const [countryInformation, setCountryInformation] = useState({});

  return (
    <div>
      <h3>Countries</h3>
      <CountryInformation countryInformation={countryInformation} />
      <CardsCountries setCountryInformation={setCountryInformation} />
      {/* <NavBar />
      <Search /> */}
    </div>
  );
};

export default Countries;
