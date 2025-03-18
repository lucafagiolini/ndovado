import Navbar from "../src/components/navbar/NavBar";
import HotelDisplay from "../src/components/hotelDisplay/hotelDisplay";
import BookingPage from "../src/components/hotelDisplay/bookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from "../src/components/hotelDisplay/bookingContext";

/* STYLE */
import "./App.scss";

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HotelDisplay />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;
