import React from "react";

const ExchangeRateCard = ({ rate }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-100">
      <h3 className="text-xl font-bold">EGP/USD Exchange Rate</h3>
      <p className="text-lg">Rate: {rate}</p>
    </div>
  );
};

export default ExchangeRateCard;
