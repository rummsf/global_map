import * as React from "react";
import { Chart } from "react-google-charts";

// const data = [
//   ["Country", "DevCount"],
//   ["Germany", 200],
//   ["United States", 300],
//   ["Brazil", 400],
//   ["Canada", 500],
//   ["France", 600],
//   ["RU", 700]
// ];

class Map extends React.Component {
  // countryData = () => {
  //   const countries = this.props.countriesToRender;
  //   return Object.entries(countries);
  // };

  render() {
    const data = this.props.countriesToRender;
    return (
      <div className="App">
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              }
            }
          ]}
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={data}
        />
      </div>
    );
  }
}

export default Map;
