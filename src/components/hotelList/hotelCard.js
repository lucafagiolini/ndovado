import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

/* STYLE */
import "../hotelList/hotelCard.scss";

const HotelCard = ({ roomType }) => {
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

  /* Function that renders the rating in stars */
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    return stars;
  };

  if (loading) return <CircularProgress />;

  return (
    <div className="hotel-list container">
      {hotels.map((hotel) => (
        <div className="hotel-card row" key={hotel.id}>
          <div className="hotel-image-box col-3">
            <img className="hotel-image" src={hotel.image} alt={hotel.name} />
            <button className="favorite-button">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
          <div className="hotel-details col-6">
            <div className="hotel-header">
              <h2>{hotel.name}</h2>
              <span>{renderStars(hotel.rating)}</span>
            </div>
            <div className="hotel-info">
              <span className="hotel-description">{hotel.description}</span>
              <div className="hotel-meta">
                <span className="hotel-location">{hotel.location}</span>
                <span className="hotel-availability">
                  {hotel.availability ? "Available" : "Not Available"}
                </span>
              </div>
            </div>
          </div>
          <div className="hotel-cta col-3">
            <span className="hotel-price">
              €{" "}
              {roomType === "single"
                ? hotel["single-room-price"]
                : hotel["double-room-price"]}
            </span>
            <button>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
