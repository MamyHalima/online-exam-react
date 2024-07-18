import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navigation">
      <div className="menu-icon" onClick={toggleMenu}>
      <i className="fas fa-bars"></i> {/* FontAwesome hamburger icon */}
      &#9776; {/* HTML code for the hamburger icon */}
        
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/exam">Take Exam</Link></li>
          <li><Link to="/result">View Results</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
