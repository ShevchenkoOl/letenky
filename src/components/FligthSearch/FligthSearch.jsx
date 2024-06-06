import React, { Component } from 'react';
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md';
import { Notify } from 'notiflix';
import Button from '../Button/Button';

import style from './fligthSearch.module.scss';

class FlightSearch extends Component {
  state = {
    from: '',
    to: '',
    date: ''
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

    this.props.onSearch({ from, to, date });
    this.setState({
      from: '',
      to: '',
      date: ''
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleSearch();
  };

  render() {
  
    const { from, to, date } = this.state;

    return (
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
        <input
          type="date"
          value={date}
          onChange={this.handleDateChange}
        />
        <Button type="submit" text="Search" />
      </form>
    );
  }
}

export default FlightSearch;



// import React, { useState } from 'react';
// import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md';
// import { Notify } from 'notiflix';

// import style from './fligthSearch.module.scss';
// // import Button from '../Button/Button';

// const FlightSearch = ({ onSearch }) => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [date, setDate] = useState('');

//   const handleSearch = () => {
//     if (!from || !to || !date) {
//         Notify.warning('Please fill all fields.');
//       return;
//     }

//     const selectedDate = new Date(date);
//     const currentDate = new Date();
    
//     if (selectedDate < currentDate) {
//         Notify.failure('Please select a future date.');
//       return;
//     }

//     onSearch({ from, to, date });
//   };

//   return (
//     <div className={style.flightSearch}>
//       <MdFlightTakeoff />
//       <input
//         type="text"
//         placeholder="From"
//         value={from}
//         onChange={(e) => setFrom(e.target.value)}
//       />
//       <MdFlightLand />
//       <input
//         type="text"
//         placeholder="To"
//         value={to}
//         onChange={(e) => setTo(e.target.value)}
//       />
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       {/* <Button onClick={handleSearch} text='Search'/> */}
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default FlightSearch;