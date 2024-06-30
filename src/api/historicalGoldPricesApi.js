const API_KEY = "goldapi-rgclisly0ol9b7-io";
const BASE_URL = "https://www.goldapi.io/api";

const fetchGoldPricesForDate = async (date) => {
  const url = `${BASE_URL}/XAU/USD/${date}`;

  try {
    const response = await fetch(url, {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      "24k": data.price_gram_24k,
      "22k": data.price_gram_22k,
      "21k": data.price_gram_21k,
      "20k": data.price_gram_20k,
      "18k": data.price_gram_18k,
      "16k": data.price_gram_16k,
      "14k": data.price_gram_14k,
      "10k": data.price_gram_10k,
    };
  } catch (error) {
    console.error(`Error fetching gold prices for ${date}:`, error);
    return null;
  }
};

export const fetchHistoricalGoldPrices = async () => {
  // const dates = ["2023-06-30", "2024-01-01", "2024-06-29"];
  // const prices = await Promise.all(dates.map(fetchGoldPricesForDate));
  // const result = {};

  // dates.forEach((date, index) => {
  //   result[date] = prices[index];
  // });

  // return result;

  return {
    "2023-06-30": {
      "24k": 60.0,
      "22k": 55.5,
      "21k": 53.0,
      "20k": 50.0,
      "18k": 45.0,
      "16k": 40.0,
      "14k": 35.0,
      "10k": 25.0,
    },
    "2024-01-01": {
      "24k": 64.0,
      "22k": 59.5,
      "21k": 58.0,
      "20k": 53.0,
      "18k": 48.0,
      "16k": 43.0,
      "14k": 38.0,
      "10k": 28.0,
    },
    "2024-06-29": {
      "24k": 70.0,
      "22k": 65.5,
      "21k": 63.0,
      "20k": 60.0,
      "18k": 55.0,
      "16k": 50.0,
      "14k": 45.0,
      "10k": 35.0,
    },
  };
};
