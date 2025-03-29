
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Offer from "./pages/offer";
import CrapList from "./pages/crapList";
import Mine from "./pages/mine";
import CrapDetail from "./pages/crapDetail";
import Wiped from "./pages/wiped";

//adding basics for starting the app, will all be changed later

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/crap" element={<CrapList />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="/crap/:id" element={<CrapDetail />} />
          <Route path="/wiped" element={<Wiped />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;