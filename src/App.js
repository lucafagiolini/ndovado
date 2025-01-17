import Navbar from "../src/components/navbar/NavBar";
import HotelDisplay from "../src/components/hotelDisplay/hotelDisplay";

/* STYLE */
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HotelDisplay />
    </div>
  );
}

export default App;
