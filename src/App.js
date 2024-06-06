import { Routes, Route } from "react-router-dom";
import WellcomePage from "./pages/WelcomePage/WellcomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import RegistPage from "./pages/RegistrPage/RegistPage";
import { Component } from "react";

import "./style/index.scss";

class App extends Component {

  handleSubmit
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<WellcomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<RegistPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
