import React, { Component } from "react";
import Table from "./components/Table";

class App extends Component {
  state = {
    developers: [],
    countriesToRender: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/developers")
      .then(resp => resp.json())
      .then(developers => this.setState({ developers }));
  }

  //Return unique instances of countries from the full list
  countries = () => {
    const allCountries = this.state.developers.map(
      developer => developer.country
    );
    const uniqueCountries = [...new Set(allCountries)];
    return uniqueCountries;
  };

  //Return the number of developers for each country
  developersPerCountry = () => {
    return this.countries().map(country => {
      return this.state.developers.filter(
        developer => developer.country === country
      ).length;
    });
  };

  //Create an array of country objects with a property of the number of developers
  countriesToRender = () => {
    return this.countries().map(country => ({
      ...country,
      developerCount: this.developersPerCountry().find(
        count => count.id === country.id
      )
    }));
  };

  render() {
    const countries = this.countriesToRender();

    return <Table countries={countries} />;
  }
}

export default App;
