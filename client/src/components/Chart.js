import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = props => {
  const topTenCountries = [...props.countriesToRender].splice(0, 9);

  let chartData = {
    labels: topTenCountries.map(country => country[0]),
    datasets: [
      {
        data: topTenCountries.map(country => country[1]),
        label: "total number of developers",
        backgroundColor: "blue",
        hoverBorderWidth: 2,
        hoverBorderColor: "grey",
        defaultFontSize: 22,
        maintainAspectRatio: false
      }
    ]
  };

  return (
    <div id="container" style={{ width: "80%", margin: "0 auto" }}>
      <div className="chart">
        TOP TEN COUNTRIES
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
