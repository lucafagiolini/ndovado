import React, { useContext } from 'react'
import { BookingContext } from '../hotelDisplay/bookingContext'
import { useNavigate } from 'react-router-dom'

/* STYLE */
import "../hotelDisplay/bookingPage.scss";

const BookingPage = () => {
  const { bookingDetails } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/');
  };

  return (
    <div className='booking-page container'>
      <h1>Booking details</h1>
      <div className='booking-details'>
          <h2>{bookingDetails.hotelName}</h2>
        <div>
          <p>{bookingDetails.roomType}</p>
          <p>{bookingDetails.dateDifference} nights</p>
        </div>
        <div>
          <p>From {bookingDetails.fromDate}</p>
          <p>To {bookingDetails.toDate}</p>
        </div>
        <div className='price-box'>
          <p>
            <span className='hotel-price'>
            €{bookingDetails.price}
            </span> 
          </p>
        </div>
      </div>

      <button onClick={handleConfirm}>Confirm Reservation</button>
    </div>
  );
};

export default BookingPage;