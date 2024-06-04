import React, { useState } from 'react';
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md';
import { Notify } from 'notiflix';

import style from './fligthSearch.module.scss';

const FlightSearch = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    if (!from || !to || !date) {
        Notify.warning('Please fill all fields.');
      return;
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();
    
    if (selectedDate < currentDate) {
        Notify.failure('Please select a future date.');
      return;
    }

    onSearch({ from, to, date });
  };

  return (
    <div className={style.flightSearch}>
      <MdFlightTakeoff />
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <MdFlightLand />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FlightSearch;

