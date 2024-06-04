import FlightSearch from '../../components/FligthSearch/FligthSearch';
import Navbar from '../../components/Navbar/Navbar';
import style from './wellcomePage.module.scss';


const WellcomePage = () => {
    // const [flights, setFlights] = useState([]);
  
    // const handleSearch = (searchParams) => {
    //   // Здесь будет логика поиска рейсов
    //   // Пример: setFlights(найденные_рейсы);
    // };
  
    return (
      <div className={style.welcomePage}>
        <Navbar />
        <FlightSearch />
        {/* <FlightSearch onSearch={handleSearch} />
        <FlightList flights={flights} /> */}
      </div>
    );
  };
  
  export default WellcomePage;