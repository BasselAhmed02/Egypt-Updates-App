import React from "react";

const GoldPriceCard = ({ karat, price }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-100">
      <h3 className="text-xl font-bold text-center">Gold {karat}</h3>
      <p className="text-lg text-center">Price: {price} EGP/gram</p>
    </div>
  );
};

export default GoldPriceCard;
