import PropTypes from 'prop-types';
import style from './flightList.module.scss';
import Button from '../../shared/Button/Button';

const FlightList = ({ flights }) => {
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { formattedDate, formattedTime };
  };

  return (
    <div className={style.flightListContainer}>
      <h2>Available Flights</h2>
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
                <Button text='Details'/>
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
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default FlightList;
