import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

/* STYLE */
import "../hotelList/hotelCard.scss";

const HotelCard = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("/hotels.json");
        if (!response.ok) throw new Error("Failed to fetch hotels");

        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <div className="hotel-list container">
      {hotels.map((hotel) => (
        <div className="hotel-card row" key={hotel.id}>
          <div className="hotel-image-box col-3">
            <img className="hotel-image" src={hotel.image} alt={hotel.name} />
            <button className="favorite-button">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
          <div className="hotel-details col-6">
            <h2>{hotel.name}</h2>
            <span>Description: {hotel.description}</span>
            <span>Location: {hotel.location}</span>
            <span>Availability: {hotel.availability ? "Yes" : "No"}</span>
          </div>
          <div className="hotel-cta col-3">
            <button>Book Now</button>
            <span>Price: €{hotel.price}/night</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
