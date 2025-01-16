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
        const response = await fetch("/hotels.json"); // Ensure hotels.json is in the public folder
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
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <div className="card-image"></div>
          <div className="card-content">
            <n2>{hotel.name}</n2>
            <span>Location: {hotel.location}</span>
            <span>Description: {hotel.description}</span>
            <span>Price: €{hotel.price}/night</span>
            <span>Availability: {hotel.availability ? "Yes" : "No"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
