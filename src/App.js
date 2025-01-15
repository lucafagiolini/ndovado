import "./App.css";
import Navbar from "../src/components/navbar/NavBar";
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
