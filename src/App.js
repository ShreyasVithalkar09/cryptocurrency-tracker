import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles/style.css";
import "./styles/coins.css";
import CoinComponent from "./components/CoinComponent";
import MobileComponent from "./components/MobileComponent";

function App() {
  function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const countries = ["inr", "usd", "eur"];
  const [country, setCountry] = useState("inr");
  const [height, width] = useWindowSize();

  useEffect(() => {
    Axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${country}&order=market_cap_desc&per_page=25&page=1&sparkline=false`
    )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [country]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <div className="operations">
        <div className="searchbar">
          <input
            type="text"
            name=""
            id="search"
            placeholder="Search the coin..."
            onChange={handleChange}
          />
        </div>
        <div className="country">
          <select value={country} onChange={handleSelect} label="Country">
            {countries.map((ele) => {
              return (
                <option style={{ color: "#fff" }} value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {width >= 748 ? (
        <div className="coinContainer">
          <table>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SYMBOL</th>
              <th>MARKET CAP</th>
              <th>PRICE</th>
              <th>24h</th>
            </tr>
            {filterCoins.map((coin) => {
              return (
                <CoinComponent
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketCap={coin.market_cap.toLocaleString()}
                  price={coin.current_price.toLocaleString()}
                  percentage={coin.market_cap_change_percentage_24h}
                  country={country}
                />
              );
            })}
          </table>
        </div>
      ) : (
        <div className="mobileContainer">
          {filterCoins.map((coin) => {
            return (
              <MobileComponent
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price.toLocaleString()}
                percentage={coin.market_cap_change_percentage_24h}
                country={country}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
