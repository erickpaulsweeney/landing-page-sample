import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Error from "./components/Error";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
