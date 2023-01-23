import "./App.scss";
import "./Variable.scss";
import Welcome from "./pages/Welcome.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
