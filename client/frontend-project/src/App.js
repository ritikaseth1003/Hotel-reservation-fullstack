import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import Hotel from "./Pages/hotel/Hotel";
import List from "./Pages/list/List.jsx";
import Login from "./Pages/login/login";
import Contact from "./Pages/contact/Contact";
import UserProfile from "./Pages/userprofile/UserProfile";
import Attractions from "./Pages/attractions/Attractions";
import Flights from "./Pages/flights/Flights";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;