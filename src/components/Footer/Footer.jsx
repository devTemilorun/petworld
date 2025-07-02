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
          <div>
            <h4>Our story</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h4>Pet care</h4>
            <a href="#">Treatments</a>
            <a href="#">Health</a>
            <a href="#">Hygiene</a>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="#">Pet Food</a>
            <a href="#">Toys</a>
            <a href="#">Accessories</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-policy">
          <p>© PETWORLD 2025</p>
          <p>Privacy policy</p>
          <p>Terms of use</p>
        </div>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
      <div className="my-name">
        <hr />
        <h4>Design By: <span>Olawuni Israel oluwatemilorun</span></h4>
      </div>
    </footer>
  )
}

export default Footer
