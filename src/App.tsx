import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import FlightDetail from "./pages/FlightDetail";
import FlightsList from "./pages/FlightList";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FlightsList />} />
          <Route path="/flight/:id" element={<FlightDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
