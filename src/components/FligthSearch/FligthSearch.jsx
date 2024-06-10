import React, { Component } from "react";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { Notify } from "notiflix";
import Button from "../../shared/Button/Button";
import flightData from "../../data/fligthData.json";
import FlightList from "../FlightList/FlightList";

import style from "./fligthSearch.module.scss";

class FlightSearch extends Component {
  state = {
    from: "",
    to: "",
    date: "",
    flights: [],
  };

  handleFromChange = (e) => {
    this.setState({ from: e.target.value });
  };

  handleToChange = (e) => {
    this.setState({ to: e.target.value });
  };

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };

  handleSearch = () => {
    const { from, to, date } = this.state;

    if (!from || !to) {
      Notify.warning("Please fill all fields.");
      return;
    }

    this.props.onSearch({ from, to, date });
    this.setState({
      from: "",
      to: "",
      date: "",
    });

    const filteredFlights = flightData.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.departure.includes(date)
    );
    if (filteredFlights.length === 0) {
      Notify.failure('No flights found.');
    }
    this.setState({ flights: filteredFlights });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleSearch();
  };

  render() {
    const { from, to, date, flights } = this.state;

    return (
      <div className={style.container}>
        <form onSubmit={this.handleSubmit} className={style.flightSearch}>
          <MdFlightTakeoff />
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={this.handleFromChange}
          />
          <MdFlightLand />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={this.handleToChange}
          />
          <input type="date" value={date} onChange={this.handleDateChange} />
          <Button type="submit" text="Search" />
        </form>
        {flights.length > 0 && (
          <FlightList
            flights={flights.map((flight) => ({
              ...flight,
              id: flight.id.toString(),
            }))}
          />
        )}
      </div>
    );
  }
}

export default FlightSearch;

// if (!from || !to || !date) {
//   Notify.warning('Please fill all fields.');
//   return;
// }

// const selectedDate = new Date(date);
// const currentDate = new Date();

// if (selectedDate < currentDate) {
//   Notify.failure('Please select a future date.');
//   return;
// }
