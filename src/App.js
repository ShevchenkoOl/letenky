import { Routes, Route, useParams } from "react-router-dom";
import { lazy, Suspense, Component } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import FlightDetails from "./components/FligthDetails/FligthDetails";
import flightData from "./data/fligthData.json"
import {Spinner} from "./components/Spinner/Spinner";

import "./style/index.scss";

const WellcomePage = lazy(() => import ("./pages/WelcomePage/WellcomePage"));
const AuthPage = lazy(() => import ("./pages/AuthPage/AuthPage"));
const RegistPage= lazy(() => import ("./pages/RegistrPage/RegistPage"));

const FlightDetailsWrapper = () => {
  const { id } = useParams(); // Получаем id полета из URL
  const flight = flightData.find(flight => flight.id.toString() === id); // Находим полет по id

  return <FlightDetails flight={flight} />;
};

class App extends Component {
  state = {
    searchFrom: "",
    searchTo: "",
    flights: [],
  };

  handleSubmit = (searchFrom) => {
    this.setState({ searchFrom });
  };
  render() {
    console.log("object :>> ", this.state);
    return (
      <>
      <Provider store={store}>
      <Suspense fallback={<Spinner />}>
      <Routes>
              <Route
                path="/"
                element={<WellcomePage onSearch={this.handleSubmit} />}
              />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/signup" element={<RegistPage />} />
              <Route path="/flight/:id" element={<FlightDetailsWrapper />} />
            </Routes>
        </Suspense>
        </Provider>
      </>
    );
  }
}

export default App;
