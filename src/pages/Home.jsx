import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../api/newsApi";
import { fetchExchangeRate } from "../api/exchangeRateApi";
import { fetchGoldPrices } from "../api/goldPriceApi";
import NewsCard from "../components/NewsCard";
import ExchangeRateCard from "../components/ExchangeRateCard";
import GoldPriceCard from "../components/GoldPriceCard";
import GoldPricesChart from "../components/GoldPricesChart";
import CurrencyConverter from "../components/CurrencyConverter";

const Home = () => {
  const [news, setNews] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [goldPrices, setGoldPrices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNews();
      setNews(newsData);

      const exchangeRateData = await fetchExchangeRate();
      setExchangeRate(exchangeRateData);

      const goldPricesData = await fetchGoldPrices();
      setGoldPrices(goldPricesData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Exchange Rates */}
      <div className="bg-red-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Exchange Rates</h2>
        {exchangeRate ? (
          <ExchangeRateCard rate={exchangeRate} />
        ) : (
          <p>Exchange rate not available.</p>
        )}

        {/* Currency Converter */}
        {exchangeRate && <CurrencyConverter exchangeRate={exchangeRate} />}
      </div>

      {/* Gold Prices */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Gold Prices</h2>
        {goldPrices ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {Object.entries(goldPrices).map(([karat, price], index) => (
                <GoldPriceCard key={index} karat={karat} price={price} />
              ))}
            </div>
            <GoldPricesChart />
          </>
        ) : (
          <p>Gold prices not available.</p>
        )}
      </div>

      {/* News */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        {news.length > 0 ? (
          <div className="flex overflow-x-scroll space-x-4 pb-4">
            {news.map((article, index) => (
              <Link key={index} to={`/news/${index}`} className="flex-1">
                <NewsCard article={article} />
              </Link>
            ))}
          </div>
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
