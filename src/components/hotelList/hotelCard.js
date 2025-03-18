import React, { useEffect, useState, useContext } from "react";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../hotelDisplay/bookingContext";

/* STYLE */
import "../hotelList/hotelCard.scss";

const HotelCard = ({ roomType, dateDifference, fromDate, toDate }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setBookingDetails } = useContext(BookingContext);
  const navigate = useNavigate();

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

  const handleBooking = (hotel, hotelId) => {
    setBookingDetails({
      hotelName: hotel.name,
      roomType,
      price:
        roomType === "single"
          ? hotel["single-room-price"] * dateDifference
          : hotel["double-room-price"] * dateDifference,
      fromDate,
      toDate,
      dateDifference,
    });

    setHotels((prevHotels) =>
      prevHotels.map((hotel) => {
        if (hotel.id === hotelId) {
          if (roomType === "single" && hotel["single-rooms"] > 0) {
            return { ...hotel, "single-rooms": hotel["single-rooms"] - 1 };
          } else if (roomType === "double" && hotel["double-rooms"] > 0) {
            return { ...hotel, "double-rooms": hotel["double-rooms"] - 1 };
          }
        }
        return hotel;
      })
    );
    navigate("/booking");
    console.log(hotel["single-rooms"]);
    console.log(hotel["double-rooms"]);
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
                <div className="hotel-availability">
                  <span>
                    {hotel.availability ? "Available" : "Not Available"}
                  </span>
                </div>
              </div>
              <span>single rooms: {hotel["single-rooms"]}</span>
              <span>double rooms: {hotel["double-rooms"]}</span>
            </div>
          </div>
          <div className="hotel-cta col-3">
            <span className="hotel-price">
              €
              {roomType === "single"
                ? hotel["single-room-price"] * dateDifference
                : hotel["double-room-price"] * dateDifference}
            </span>
            <span className="hotel-date-difference">
              {dateDifference} nights
            </span>
            <button className="book-now" onClick={() => handleBooking(hotel)}>
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
