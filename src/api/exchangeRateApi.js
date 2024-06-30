const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

export const fetchExchangeRate = async () => {
  const response = await fetch(`${BASE_URL}/USD`);
  const data = await response.json();
  return data.rates.EGP;
};
