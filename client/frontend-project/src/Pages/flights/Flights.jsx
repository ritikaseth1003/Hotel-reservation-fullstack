import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FlightList from "./FlightList"; // Assuming this displays the list of flights
import Footer from "../../components/footer/footer";
import "./flights.css"; // Styles for the Flights page

const Flights = () => {
  return (
    <div className="flightsPage">
      <Navbar />
      
      <div className="flightsContainer">
        <h1 className="pageTitle">Available Flights</h1>
        <FlightList />
    
        <Footer />
      </div>
    </div>
  );
};

export default Flights;
