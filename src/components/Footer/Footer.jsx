import './Footer.css'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="logo">
            <img src="https://cdn.animaapp.com/projects/6266b25d92b017b1def12381/releases/639b48754352b09dbe84fc07/img/vector-6@2x.png" alt="logo" />
            <h2>PETWORLD</h2>
          </div>
          <p className='subscribe-heading'>Updates right to your Inbox</p>
          <div className="subscribe">
            <input type="email" placeholder="Email Address" />
            <button>Send</button>
          </div>
        </div>
        <div className="footer-links">
          <span>
            <h4>Our story</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </span>
          <span>
            <h4>Pet care</h4>
            <a href="#">Treatments</a>
            <a href="#">Health</a>
            <a href="#">Hygiene</a>
          </span>
          <span>
            <h4>Shop</h4>
            <a href="#">Pet Food</a>
            <a href="#">Toys</a>
            <a href="#">Accessories</a>
          </span>
          <span>
            <h4>Links</h4>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
          </span>
        </div>
      </div>

      <div className="footer-bottom">
          <p>© <br /> PETWORLD 2025</p>
        <span className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </span>
      </div>
      <div className="my-contact">
        <hr />
        <h4>Design By:  Olawuni Israel oluwatemilorun 
            <a 
              href="mailto:olawuniisrael2020@gmail.com?subject=Hello!&body=Hi,%20I%20would%20like%20to%20contact%20you">
              click to drop a mail
            </a>
          </h4>
      </div>
    </footer>
  )
}

export default Footer