import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/footer";
import './attractions.css';
import Header from "../../components/header/Header";

const Attractions = () => {
  // State to track selected attraction for display
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  // List of hotels with attractions
  const hotels = [
    {
      name: "Hotel Central Park",
      attractions: [
        { 
          name: "Central Park", 
          description: "A large city park with beautiful scenery.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbc2azS0X628cpyK6i9m30YFxVPkk4nHlCkA&s"
        },
        { 
          name: "Art Museum", 
          description: "Museum with historical and modern art exhibits.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsSsV0bUsPwtPuPInijZQlLpvFjihtqgwDQ&s"
        }
      ],
      nearbyAirports: ["Downtown International Airport", "Skyline City Airport"],
      localFood: ["Pizza Parlor", "Sushi House", "Italian Bistro"],
      weather: { temperature: "72°F", condition: "Clear" }
    },
    {
      name: "Beachside Resort",
      attractions: [
        { 
          name: "Beach Walk", 
          description: "A scenic walking area along the beach.", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3pQ01vSoQ1vhqeGM2Z7ehh3rTbE-NNuuXw&s" 
        }
      ],
      nearbyAirports: ["Sunset Beach Airport", "Shoreline International"],
      localFood: ["Beachside Cafe", "Seafood Grill"],
      weather: { temperature: "85°F", condition: "Sunny" }
    },
    {
      name: "Mountain Retreat",
      attractions: [
        { 
          name: "Mountain Peak", 
          description: "A breathtaking view from the top of the mountain.", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zUmD9D0JdZpKf5aJ8g0LbyYtOr0QgL59hQ&s" 
        },
        { 
          name: "Forest Trail", 
          description: "A peaceful walk through the dense forest.", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jtkQTUXXLrA-kE9JhVlyx2NS0g55e61_Yg&s" 
        }
      ],
      nearbyAirports: ["Alpine Village Airport", "Mountain View Airstrip"],
      localFood: ["Mountain Grill", "Forest Restaurant"],
      weather: { temperature: "60°F", condition: "Cloudy" }
    }
  ];

  const handleAttractionClick = (attraction) => {
    setSelectedAttraction(attraction);
  };

  return (
    <div className="attractions-container">
      <Navbar />
      {/* Render the top part of the Header only */}
      <Header type="List" />
      <h2>Hotels and Nearby Attractions</h2>

      {/* Display Hotels List */}
      <div className="hotels-list">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel">
            <h3>{hotel.name}</h3>

            {/* List Attractions */}
            <div className="attractions-list">
              {hotel.attractions.map((attraction, idx) => (
                <div 
                  key={idx} 
                  className="attraction-item" 
                  onClick={() => handleAttractionClick(attraction)}
                >
                  <img src={attraction.image} alt={attraction.name} />
                  <h5>{attraction.name}</h5>
                </div>
              ))}
            </div>

            {/* Display nearby airports, food options, and weather */}
            <div className="details">
              <h4>Nearby Airports</h4>
              <ul>
                {hotel.nearbyAirports.map((airport, idx) => (
                  <li key={idx}>{airport}</li>
                ))}
              </ul>

              <h4>Local Food Options</h4>
              <ul>
                {hotel.localFood.map((food, idx) => (
                  <li key={idx}>{food}</li>
                ))}
              </ul>

              <h4>Weather</h4>
              <p>{`Temperature: ${hotel.weather.temperature}, Condition: ${hotel.weather.condition}`}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Display Selected Attraction Information */}
      {selectedAttraction && (
        <div className="attraction-details">
          <h4>Attraction Details</h4>
          <img src={selectedAttraction.image} alt={selectedAttraction.name} />
          <h5>{selectedAttraction.name}</h5>
          <p>{selectedAttraction.description}</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Attractions;
