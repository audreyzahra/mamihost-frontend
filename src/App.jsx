// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home/Home"
import Packages from "./pages/Packages/Packages";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        {/* <Route path='/packages' element={<Packages />} /> */}
        <Route path="/packages">
          <Route path=":packageId" element={<Packages/>}>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;