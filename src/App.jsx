// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home/Home"
import Packages from "./pages/Packages/Packages";
import Login from "./pages/Login/Login"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="/packages">
          <Route path=":packageId" element={<Packages/>}>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
