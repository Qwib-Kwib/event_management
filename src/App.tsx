import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Demo from './demo';
import Signup from './signup';
import Signin from './signin';

function Home() {
  return (
    <div className="landing_page">
      <div className="title">
        <h1>EVENT</h1>
        <h1>MANAGEMENT</h1>
        <h1>APPLICATION</h1>
      </div>
      <div className="content">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate
          mauris aliquet, tincidunt ligula nec, pellentesque justo. Cras et
          tortor augue. Fusce interdum in velit vitae mattis. Donec egestas,
          eros id consequat ultrices, justo velit ultricies sapien, quis ornare
          mauris tellus sed leo.
        </h3>
        <Link to="/demo">
          <button type="button" className="manage">
            MANAGE EVENT
          </button>
        </Link>
      </div>
    </div>
  );
}

function About() {
  return <div>About Page</div>;
}

function Contact() {
  return <div>Contact Page</div>;
}

function App() {
  return (
    <Router>
      <div className="header">
        <div className="logo">Event Management App</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/demo">
            <button type="button" className="demo">
              Book Event
            </button>
          </Link>
          <Link to="/signup">
          <button type="button" className="signup">
            Sign Up
          </button>
          </Link>
        </nav>
      </div>

      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
