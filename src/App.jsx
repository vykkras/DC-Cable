import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Video Background */}
        <video autoPlay loop muted className="video-bg">
          <source src="background.mp4" type="video/mp4" />
        </video>
        <div className="overlay" />

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <span className="logo-dc">DC</span>
            <span className="logo-cable">CABLE</span>
            <div className="logo-sub">AUTHORIZED CONTRACTOR</div>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






