import React, { Component } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Map from "./components/Map";
import Table from "./components/Table";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

class App extends Component {
  state = {
    developers: []
    // countriesToRender: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/developers")
      .then(resp => resp.json())
      .then(developers => this.setState({ developers }));
  }

  // countriesToRender = () => {
  // const countriesToRender =
  // return this.state.developers.reduce(
  // the first param of a reduce is the callback the callback's first two params
  //are the accumulator (dpc) and the current array value (dev)
  // (dpc, dev) => {
  // console.log("\n" + "-".repeat(25));
  // console.log("dpc is currently:", dpc);
  // console.log("dev is currently:", dev);

  // if the country already has an entry in dpc, increment it
  // otherwise, create the entry with a value of 1
  // dpc[dev.country] = dpc[dev.country] ? dpc[dev.country] + 1 : 1;

  // return the updated dpc object
  // return dpc;
  // },
  // the second param of the reduce is the initial value of the accumulator
  // {}
  // );
  // this.setState({ countriesToRender: countriesToRender });
  // };

  countriesToRender = () => {
    const devsPerCountry = this.state.developers.reduce(
      (acc, { country }) => ({
        ...acc,
        [country]: (acc[country] || 0) + 1
      }),
      {}
    );
    return Object.entries(devsPerCountry).sort((a, b) => b[1] - a[1]);
  };

  // sortBy = () => {
  //   const countries = this.props.countriesToRender;
  //   const countriesArray = Object.entries(countries);
  //   return countriesArray.sort((a, b) => {
  //     return b.value - a.value;
  //   });
  // };

  render() {
    const countries = this.countriesToRender();

    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route
            exact
            path="/table"
            render={props => (
              <Table
                {...props}
                countriesToRender={countries}
                // sortBy={this.sortBy}
                // countriesToRender={this.state.countriestoRender} />;
                // {this.state.countries} />;
                // developers={this.state.developers}
              />
            )}
          />
          <Route
            exact
            path="/map"
            render={props => (
              <Map
                {...props}
                countriesToRender={countries}
                // {this.state.countries} />;
                // developers={this.state.developers}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

// Return unique instances of countries from the full list
// countries = () => {
//   const allCountries = this.state.developers.map(
//     developer => developer.country
//   );
//   const uniqueCountries = [...new Set(allCountries)];
//   return uniqueCountries;
// };

// Return the number of developers for each country
// developersPerCountry = () => {
//   return this.countries().map(country => {
//     return this.state.developers.filter(
//       developer => developer.country === country
//     ).length;
//   });
// .sort((a, b) => b - a);
// };

//Create an array of country objects from an array of country strings and an array of
//developerCount integers so that the object has properties of developerCount and countryName
// countriesToRender = () => {
//   return this.countries().map(country => {
//     let devFound = this.developersPerCountry().find(
//       devsPerCount => devsPerCount.id === country.id
//     );
//     return { ...country, ...devFound };
//   });
// };

// countriesToRender = () => {
// const countriesToRender = this.countries().map(country => ({
//   ...country,
//   developerCount: this.developersPerCountry().find(
//     count => count.id === country.id
//   )
// }));
// this.setState({ countriesToRender: countries });
// this.setState();

//   const countries = this.countries().map(country => ({
//     ...country,
//     countryName: country.value
//   }));
//   countries.map(country => ({
//     ...country,
//     developerCount: this.developersPerCountry().find(
//       count => count.id === country.id
//     )
//   }));
//   this.setState({ countriesToRender: countries });
// };
