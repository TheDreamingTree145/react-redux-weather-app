import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
  renderCity = (cityData) => {
    const name = cityData.city.name;
    const lastFive = cityData.list.slice(0, 5);
    const temps = lastFive.map(day => Math.round((day.main.temp*(9/5) - 459.67) * 100) / 100).map(temp => {
      return <li>{temp}</li>
    });
    const humidity = lastFive.map(day => <li>{day.main.humidity}</li>);
    const winds = lastFive.map(day => <li>{day.wind.speed}</li>);
    const descriptions = lastFive.map(day => <li>{day.weather[0].description}</li>);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><ol>{temps}</ol></td>
        <td><ol>{humidity}</ol></td>
        <td><ol>{winds}</ol></td>
        <td><ol>{descriptions}</ol></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Tempatures(°F)</th>
            <th>Humidity(%)</th>
            <th>Winds(m/s)</th>
            <th>Descriptions</th>
          </tr>
        </thead>
        <tbody>
        {this.props.city.map(this.renderCity)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    city: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
