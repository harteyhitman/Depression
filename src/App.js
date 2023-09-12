import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage";
import SignInPage from "./signinpage/SignInPage";
import Submit from "./Main/Submit";
import EndSection from "./Main/EndSection";

function App() {
  return (
    <Router>
      <Routes>
                   <Route exact path="/" element={<HomePage /> } />
                   <Route exact path="SignInPage" element={<SignInPage /> } />
                   <Route exact path="/SignInPage/Submit" element={<Submit /> } />
                   <Route exact path="/SignInPage/Submit/EndSection" element={<EndSection /> } />
                   
      </Routes>
    </Router>
  );
}

export default App;
