import axios from 'axios';

export const fetchCities = () => {
  return axios.get('/api/raw/LRfGdcJx') // Обращаемся к `/api`, а не к `https://pastebin.com`
    .then(response => response.data.map(flight => flight.from))
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
};
