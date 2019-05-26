import React, { Component } from "react";
import { countries } from "country-data-list";
import { VectorMap } from "react-jvectormap";
// console.log(countries.all);

class Map extends Component {
  developerCountries = () => {
    const allCountries = this.props.developers.map(
      developer => developer.country
    );
    const uniqueCountries = [...new Set(allCountries)];
    return uniqueCountries;
  };

  //   developerCountries().map(developerCountry => {
  //   countries.find(country => country.name === developerCountry)

  render() {
    let mapData = {
      CN: 100000,
      IN: 9900,
      SA: 86,
      EG: 70,
      SE: 0,
      FI: 0,
      FR: 0,
      US: 20
    };
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor="blue"
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "620px"
          }}
          //   onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc" //what colour clicked country will be
            },
            selectedHover: {}
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: mapData, //this is your data
                scale: ["#146804", "#ff0000"], //your color game's here
                normalizeFunction: "polynomial"
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default Map;
