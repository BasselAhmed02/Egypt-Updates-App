const API_KEY = "YOUR_EXCHANGE_RATE_API_KEY";
const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

export const fetchExchangeRate = async () => {
  const response = await fetch(`${BASE_URL}/USD`);
  const data = await response.json();
  console.log(data.rates.EGP);
  return data.rates.EGP;
};
