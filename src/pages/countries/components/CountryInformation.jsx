import React from "react";
import reactDom from "react-dom";
import style from "./CountryInformation.css";

const CountryInformation = ({ countryInformation }) => {
  return (
    <div>
      <h3>CountryInformation</h3>

      <h3>
        <br />
        {countryInformation.name}
      </h3>
      <figure>
        <img className="imgMain" src={countryInformation.flag} alt="" />
      </figure>
      {console.log(countryInformation.name)}
    </div>
  );
};

export default CountryInformation;
