import styles from "./CardCountry.css";
import React from "react";

const CardCountry = ({ name, subregion, flag, setCountryInformation }) => {
  return (
    <div onClick={() => setCountryInformation({ name, subregion, flag })}>
      <figure>
        <img src={flag} alt="" />
      </figure>
      <span>
        <h3>{name}</h3>
        <p>{subregion}</p>
      </span>
    </div>
  );
};

export default CardCountry;
