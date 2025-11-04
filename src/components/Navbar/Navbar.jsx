import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <img
            src="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/vector@2x.png"
            alt="logo"
          />
          <h3>PETWORLD</h3>
        </div>

        <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link ">
            About Us
          </a>
          <a href="#" className="nav-link ">
            Contact Us
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
