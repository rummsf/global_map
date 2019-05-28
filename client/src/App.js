import React, { Component } from "react";
import Chart from "./components/Chart";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Map from "./components/Map";
import Table from "./components/Table";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

class App extends Component {
  state = {
    developers: [],
    searchQuery: ""
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/developers")
      .then(resp => resp.json())
      .then(developers => this.setState({ developers }));
  }

  changeSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

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
                searchQuery={this.state.searchQuery}
                changeSearchQuery={this.changeSearchQuery}
              />
            )}
          />
          <Route
            exact
            path="/map"
            render={props => <Map {...props} countriesToRender={countries} />}
          />
          <Route
            exact
            path="/chart"
            render={props => <Chart {...props} countriesToRender={countries} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
