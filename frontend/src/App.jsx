import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AlternativeFlights from "./pages/AlternativeFlights";
import Recovery from "./pages/Recovery";
import AIProcessing from "./pages/AIProcessing";
import TripSummary from "./pages/TripSummary";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/flights" element={<><Navbar /><AlternativeFlights /></>} />
        <Route path="/recovery" element={<><Navbar /><Recovery /></>} />
        <Route path="/summary" element={<><Navbar /><TripSummary /></>} />
        <Route path="/profile" element={<><Navbar /><Profile /></>} />
        <Route path="/ai" element={<><Navbar /><AIProcessing /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;