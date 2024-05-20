import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div>Flight List</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
