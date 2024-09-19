import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Header from "./components/Header";
import PropertyDetails from "./pages/PropertyDetails";

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
