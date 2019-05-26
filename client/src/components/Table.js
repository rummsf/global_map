import React from "react";

class Table extends React.Component {
  // countryNames = () => {
  //   this.props.countriesToRender.map(country => {
  //     return <tr>{country.countryName}</tr>;
  //   });
  // };

  // array.map((_, index) => index)
  // const nextArr = reorder(arr, indexes)

  //Return unique instances of countries from the full list
  // countries = () => {
  //   const allCountries = this.props.developers.map(
  //     developer => developer.country
  //   );
  //   const uniqueCountries = [...new Set(allCountries)];
  //   return uniqueCountries;
  // };

  //Return the number of developers for each country
  // developersPerCountry = () => {
  //   return this.countries().map(country => {
  //     return this.props.developers.filter(
  //       developer => developer.country === country
  //     ).length;
  //   });
  //   // .sort((a, b) => b - a);
  // };

  //Return the indices of the sorted developersPerCountry
  // sortedDevelopersPerCountryIndices = () => {
  //   return this.developersPerCountry()
  //     .map((count, index) => {
  //       return { index, count };
  //     })
  //     .sort((a, b) => b - a)
  //     .map(object => object.index);
  // };

  // sortCountries = () => {
  //   const indices = this.sortedDevelopersPerCountryIndices();
  //   return indices.map(index => this.countries()[index]);
  // const nextArr = reorder(arr, indexes)
  // };

  // sortDeveloperCount = () => {
  //   return this.developersPerCountry().sort((a, b) => b - a);
  // };

  //   const unordered = [101, 102, 103];
  //   const indexes = [1, 0, 2];

  //   console.log(
  //     indexes.map(index => (unordered[index]))
  // );

  // const countries = [{ id: 0, value: 'Afghanistan', ... }]
  // const developerCounts = [{ id: 0, value: 123, ... }]

  // sortByDeveloperCount = () => {
  //   developersPerCountry().sort;
  // };

  getCountryNames = () => {
    return Object.keys(this.props.countriesToRender);
  };

  getDeveloperCounts = () => {
    return Object.values(this.props.countriesToRender);
  };

  sortBy = () => {
    const countries = this.props.countriesToRender;
    const countriesArray = Object.entries(countries);
    return countriesArray.sort((a, b) => {
      return b.value - a.value;
    });
  };

  render() {
    return (
      <div>
        <table className="ui celled center aligned table">
          <thead>
            <tr>
              <th>Country</th>
              <th>
                {" "}
                <button onClick={() => this.sortBy()}>Developers</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.getCountryNames().map(name => {
                  return <tr>{name}</tr>;
                })}
                {/* {this.props.countries} */}
              </td>

              {/* {this.countryNames()} */}
              {/* {this.sortCountries().map(country => {
                return <tr>{country}</tr>;
              })} */}
              <td>
                {this.getDeveloperCounts().map(count => {
                  return <tr>{count}</tr>;
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
