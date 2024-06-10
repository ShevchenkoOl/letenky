import React from "react";
import PropTypes from "prop-types";
import Button from "../../shared/Button/Button";

import style from "./flightDetails.module.scss";
import { NavLink } from "react-router-dom";

const FlightDetails = ({ flight }) => {
  if (!flight) {
    return <div>Loading...</div>; 
  }

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { formattedDate, formattedTime };
  };

  const { formattedDate: departureDate, formattedTime: departureTime } =
    formatDateTime(flight.departure);
  const { formattedDate: arrivalDate, formattedTime: arrivalTime } =
    formatDateTime(flight.arrival);

  return (
    <>
    <div className={style.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${style.navLink} ${style.activeNavLink}` : style.navLink
        }
      >
        Home
      </NavLink>
      </div>
      <div className={style.container}>
        <h3 className={style.header}>Flight Details</h3>
        <div className={style.details}>
          <strong>Departure:</strong> {departureDate} {departureTime}
        </div>
        <div>
          <strong>Arrival:</strong> {arrivalDate} {arrivalTime}
        </div>
        <div>
          <strong>Price:</strong> {flight.price}
        </div>
        <div className={style.seats}>
          <h4>Available Seats</h4>
          <ul>
            {flight.seats.map((seat) => (
              <li key={seat.id} className={style.seat}>
                {seat.number} - {seat.available ? "Available" : "Booked"}
                <Button text="Add" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

FlightDetails.propTypes = {
  flight: PropTypes.shape({
    departure: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    seats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        number: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }),
};

export default FlightDetails;
