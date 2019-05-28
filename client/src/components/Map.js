import * as React from "react";
import { Chart } from "react-google-charts";

class Map extends React.Component {
  getData = () => {
    const data = Object.values(this.props.countriesToRender);
    const mapData = [["Country", "Developers"], ...data];
    return mapData;
  };

  render() {
    const data = this.getData();
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
          height="675px"
          data={data}
          options={{
            colorAxis: { colors: ["#c3dbd5", "#21493f"] },
            backgroundColor: "lightBlue"
          }}
        />
      </div>
    );
  }
}

export default Map;
