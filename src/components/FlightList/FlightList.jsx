import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button/Button';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux'; 
import { isUserLogin } from '../../redux/auth/auth-selector'; 
import { Link } from 'react-router-dom';

import style from './flightList.module.scss';

const FlightList = ({ flights }) => {
  const isUserLoggedIn = useSelector(isUserLogin);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { formattedDate, formattedTime };
  };

  const handleDetailsClick = (flightId) => {
    console.log('Button clicked');
    if (isUserLoggedIn) {
      window.location.href = `/flight/${flightId}`;
    } else {
      Notify.failure('Please register or log in to see flight details.');
    }
  };

  return (
    <div className={style.flightListContainer}>
      <h2 className={style.title}>Available Flights</h2>
      <ul className={style.flightList}>
        {flights.map(flight => {
          const { formattedDate: departureDate, formattedTime: departureTime } = formatDateTime(flight.departure);
          const { formattedDate: arrivalDate, formattedTime: arrivalTime } = formatDateTime(flight.arrival);
          return (
            <li key={flight.id} className={style.flightItem}>
              <div className={style.flightRoute}>
                {`${flight.from} → ${flight.to}`}
              </div>
              <div className={style.flightInfo}>
                <div className={style.flightTime}>
                  <strong>Departure:</strong> {departureDate} {departureTime}
                </div>
                <div className={style.flightTime}>
                  <strong>Arrival:</strong> {arrivalDate} {arrivalTime}
                </div>
                <div className={style.flightPrice}>
                  <strong>Price:</strong> {flight.price}
                </div>
                <Link to={`/flight/${flight.id}`}>
                  <Button text='Details' onClick={() => handleDetailsClick(flight.id)} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FlightList.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
};

export default FlightList;
