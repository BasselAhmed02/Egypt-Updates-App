import React, { useState } from "react";
import PropTypes from "prop-types";

const CurrencyConverter = ({ exchangeRate }) => {
  const [egpAmount, setEgpAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");

  const handleConvertToUsd = () => {
    if (egpAmount !== "") {
      const convertedUsd = (parseFloat(egpAmount) / exchangeRate).toFixed(2);
      setUsdAmount(convertedUsd);
    }
  };

  const handleConvertToEgp = () => {
    if (usdAmount !== "") {
      const convertedEgp = (parseFloat(usdAmount) * exchangeRate).toFixed(2);
      setEgpAmount(convertedEgp);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Currency Converter</h3>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="egpAmount" className="block mb-1">
            EGP
          </label>
          <input
            type="number"
            id="egpAmount"
            className="w-full border rounded-md py-2 px-3"
            value={egpAmount}
            onChange={(e) => setEgpAmount(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="usdAmount" className="block mb-1">
            USD
          </label>
          <input
            type="number"
            id="usdAmount"
            className="w-full border rounded-md py-2 px-3"
            value={usdAmount}
            onChange={(e) => setUsdAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleConvertToUsd}
        >
          Convert to USD
        </button>
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleConvertToEgp}
        >
          Convert to EGP
        </button>
      </div>
    </div>
  );
};

CurrencyConverter.propTypes = {
  exchangeRate: PropTypes.number.isRequired,
};

export default CurrencyConverter;
