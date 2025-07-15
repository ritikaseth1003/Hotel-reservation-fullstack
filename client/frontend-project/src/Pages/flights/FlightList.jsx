import React from "react";
import "./flights.css";

const FlightList = () => {
  const flights = [
    { id: 1, origin: "New York", destination: "London", departure: "10:00 AM", price: "$500" },
    { id: 2, origin: "Los Angeles", destination: "Tokyo", departure: "3:00 PM", price: "$750" },
    { id: 3, origin: "Chicago", destination: "Paris", departure: "1:30 PM", price: "$650" },
    { id: 4, origin: "Miami", destination: "Berlin", departure: "5:00 PM", price: "$450" },
  ];

  return (
    <div className="flightList">
      {flights.map((flight) => (
        <div key={flight.id} className="flightCard">
          <h2>{flight.origin} ➔ {flight.destination}</h2>
          <p>Departure: {flight.departure}</p>
          <p>Price: {flight.price}</p>
          <button className="bookButton">Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
