import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listing" element={<Listing />} />
      </Routes>
    </div>
  );
};

export default App;
