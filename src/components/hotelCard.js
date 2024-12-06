import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {hotels.map((hotel) => (
        <Card key={hotel.id} style={{ width: "300px", margin: "10px" }}>
          <CardContent>
            <Typography variant="h5">{hotel.name}</Typography>
            <Typography>Location: {hotel.location}</Typography>
            <Typography>Description: {hotel.description}</Typography>
            <Typography>Price: €{hotel.price}/night</Typography>
            <Typography>
              Availability: {hotel.availability ? "Yes" : "No"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HotelCard;

