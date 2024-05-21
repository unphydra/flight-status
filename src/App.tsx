import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import FlightsList from "./pages/FlightList";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FlightsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
