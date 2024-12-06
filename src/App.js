import "./App.css";
import Navbar from "./components/NavBar";
import HotelCard from "./components/hotelCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Available Hotels</h1>
      <HotelCard />
    </div>
  );
}

export default App;
