import React from "react";
import "../Styling.css";

class Table extends React.Component {
  countries = () => {
    const countries = [
      ...this.props.countriesToRender.filter(country =>
        country[0].toLowerCase().includes(this.props.searchQuery)
      )
    ];
    return countries.filter(country => country[0] !== "");
  };

  render() {
    const countries = this.countries();
    return (
      <div>
        <br />
        <div className="ui search">
          <div className="ui small icon input">
            <input
              style={{ marginLeft: "20px" }}
              className="prompt"
              type="text"
              placeholder="Search by country"
              onChange={event =>
                this.props.changeSearchQuery(event.target.value)
              }
            />
            <i className="search icon" />
          </div>
        </div>
        <br />
        <div
          id="container"
          style={{ height: "100%", width: "50%", margin: "0 auto" }}
        >
          <div id="scroll">
            <table className="ui  celled center aligned  table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Developers</th>
                </tr>
              </thead>
              <tbody>
                {countries.map(country => {
                  return (
                    <tr key={country[0]}>
                      <td>{country[0]}</td>
                      <td>{country[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
