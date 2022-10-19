// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navigation />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
