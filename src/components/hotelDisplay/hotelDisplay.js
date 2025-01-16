import React from "react";
import HotelCard from "../hotelList/hotelCard.js";

/* STYLE */
import "../hotelDisplay/hotelDisplay.scss";

const HotelDisplay = () => {
  return (
    <div className="hotel-display">
      <h1>Available Hotels</h1>
      <HotelCard />
    </div>
  );
};

export default HotelDisplay;
