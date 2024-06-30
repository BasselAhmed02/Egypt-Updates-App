const API_KEY = "goldapi-rgclisly0ol9b7-io";
const BASE_URL = "https://www.goldapi.io/api/XAU/EGP";

export const fetchGoldPrices = async () => {
  const myHeaders = new Headers();
  myHeaders.append("x-access-token", API_KEY);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(BASE_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const goldPrices = {
      "24k": data.price_gram_24k,
      "22k": data.price_gram_22k,
      "21k": data.price_gram_21k,
      "20k": data.price_gram_20k,
      "18k": data.price_gram_18k,
      "16k": data.price_gram_16k,
      "14k": data.price_gram_14k,
      "10k": data.price_gram_10k,
    };
    return goldPrices;
  } catch (error) {
    console.error("Failed to fetch gold prices:", error);
    return null;
  }

  // Used for mocking in development
  return {
    "24k": 1,
    "22k": 2,
    "21k": 3,
    "20k": 4,
    "18k": 5,
    "16k": 6,
    "14k": 7,
    "10k": 8,
  };
};
