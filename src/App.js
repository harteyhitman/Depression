import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage";
import Questions from "./questionsPage/Questions";

function App() {
  return (
    <Router>
      <Routes>
                   <Route exact path="/" element={<HomePage /> } />
                   <Route exact path="Questions" element={<Questions /> } />
      </Routes>
    </Router>
  );
}

export default App;
