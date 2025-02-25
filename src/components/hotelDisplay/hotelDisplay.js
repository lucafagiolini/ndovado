import React from "react";
import HotelCard from "../hotelList/hotelCard.js";
import RoomSelector from "../hotelDisplay/room-dateSelector/roomSelector.js";
import { useState } from "react";

/* STYLE */
import "../hotelDisplay/hotelDisplay.scss";

const HotelDisplay = () => {
  /* FUNCTION that set the value for the room and will pass the value with props to del child component */
  const [roomType, setRoomType] = useState("single");

  return (
    <div className="hotel-display">
      <RoomSelector roomType={roomType} setRoomType={setRoomType} />
      <h1>Available Hotels</h1>
      <HotelCard roomType={roomType} />
    </div>
  );
};

export default HotelDisplay;
