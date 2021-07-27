import React from "react";
import "../styles/style.css";

const CoinComponent = ({
  name,
  image,
  symbol,
  price,
  marketCap,
  percentage,
  country,
}) => {
  return (
    <>
      <tr>
        <td>
          <img className="coinImage" src={image} alt="crypto" />
        </td>
        <td>{name}</td>
        <td className="symbol">{symbol}</td>
        <td>
          {country === "inr" ? "₹" : country === "usd" ? "$" : "€"}
          {marketCap}
        </td>
        <td>
          {country === "inr" ? "₹" : country === "usd" ? "$" : "€"}
          {price}
        </td>
        {percentage < 0 ? (
          <td className="coinPercent_red">{percentage.toFixed(2)}%</td>
        ) : (
          <td className="coinPercent_green">{percentage.toFixed(2)}%</td>
        )}
      </tr>
    </>
  );
};

export default CoinComponent;
