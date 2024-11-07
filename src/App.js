import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Playground from "./components/Playground/Playground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pl" element={<Playground />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
