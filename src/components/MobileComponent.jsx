import React from 'react';

const MobileComponent = ({name,price,symbol,image,percentage,country}) => {
    return (
        <>
            <div className="coinCard">
                <div className="imageIcon">
                    <img src={image} alt="crypto" />
                </div>
                <div className="title">
                    <h1>{name}</h1>
                    <p>{symbol}</p>
                </div>
                <div className="priceData">
                    <h1>Price: {country === "inr" ? "₹" : country === "usd" ? "$" : "€"}
          {price}</h1>
                    {percentage < 0 ? (<p className="coinPercent_red">{percentage.toFixed(2)}%</p>)
                    : (<p className="coinPercent_green">{percentage.toFixed(2)}%</p>)    
                }
                </div>
            </div>
        </>
    )
}

export default MobileComponent;
