import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage";
import SignInPage from "./signinpage/SignInPage";

function App() {
  return (
    <Router>
      <Routes>
                   <Route exact path="/" element={<HomePage /> } />
                   <Route exact path="SignInPage" element={<SignInPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
