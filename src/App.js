import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Listing from "../src/pages/Listing";
import Header from "../src/components/Header";
import PropertyDetails from "../src/pages/PropertyDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/PropertyDetails/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
};

export default App;
