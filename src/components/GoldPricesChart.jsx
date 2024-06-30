import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchHistoricalGoldPrices } from "../api/historicalGoldPricesApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GoldPricesChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getGoldPrices = async () => {
      const historicalData = await fetchHistoricalGoldPrices();

      if (historicalData) {
        const labels = Object.keys(historicalData);

        const karats = ["24k", "22k", "21k", "20k", "18k", "16k", "14k", "10k"];
        const colors = [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(199, 199, 199, 0.2)",
          "rgba(83, 102, 255, 0.2)",
        ];
        const borderColors = [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
          "rgba(83, 102, 255, 1)",
        ];

        const datasets = karats.map((karat, index) => ({
          label: `Gold Price (${karat})`,
          data: labels.map((label) => historicalData[label][karat]),
          fill: false,
          backgroundColor: colors[index],
          borderColor: borderColors[index],
          borderWidth: 1,
        }));

        setChartData({
          labels: labels,
          datasets: datasets,
        });
      }
    };

    getGoldPrices();
  }, []);

  if (!chartData) {
    return <p>Loading...</p>;
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Historical Gold Prices (USD)",
        font: {
          size: 20,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default GoldPricesChart;
