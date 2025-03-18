import React from "react";
import HotelCard from "../hotelList/hotelCard.js";
import RoomSelector from "../hotelDisplay/room-dateSelector/roomSelector.js";
import DateSelector from "../hotelDisplay/room-dateSelector/dateSelector.js";
import { useState } from "react";
import dayjs from "dayjs";

/* STYLE */
import "../hotelDisplay/hotelDisplay.scss";

const HotelDisplay = () => {
  /* FUNCTION that set the value for the room and will pass the value with props to Hotel Card component */
  const [roomType, setRoomType] = useState("single");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const formattedFromDate = fromDate
    ? dayjs(fromDate).format("YYYY-MM-DD")
    : "";
  const formattedToDate = toDate ? dayjs(toDate).format("YYYY-MM-DD") : "";

  const calculateDateDifference = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    return end.diff(start, "day");
  };

  const dateDifference = calculateDateDifference(
    formattedFromDate,
    formattedToDate
  );
  console.log(dateDifference);

  return (
    <div className="hotel-display container">
      <div className="room-date-selector-box">
        <DateSelector
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
        <RoomSelector roomType={roomType} setRoomType={setRoomType} />
      </div>
      <h1>Available Hotels</h1>
      <HotelCard
        roomType={roomType}
        dateDifference={dateDifference}
        fromDate={formattedFromDate}
        toDate={formattedToDate}
      />
    </div>
  );
};

export default HotelDisplay;
