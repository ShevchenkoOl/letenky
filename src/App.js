import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, Component } from "react";

import "./style/index.scss";

const WellcomePage = lazy(() => import ("./pages/WelcomePage/WellcomePage"));
const AuthPage = lazy(() => import ("./pages/AuthPage/AuthPage"));
const RegistPage= lazy(() => import ("./pages/RegistrPage/RegistPage"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<WellcomePage onSearch={this.handleSubmit} />}
          />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<RegistPage />} />
        </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
