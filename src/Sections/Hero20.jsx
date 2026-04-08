




import { Link } from "react-router";

function Hero20() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-col">
          <h2 className="logo">Easy Travel</h2>

          <p className="label">Currencies</p>
          <select className="currency">
            <option>EUR</option>
            <option>USD</option>
            <option>PKR</option>
          </select>

          <div className="socials">
             <Link to="#"><span className="circle fb"><i class="fa-brands fa-facebook-f"></i></span></Link>
            <Link to="#"><span className="circle ig"><i class="fa-brands fa-instagram"></i></span></Link>
            <Link to="#"><span className="circle pin"><i class="fa-brands fa-pinterest-p"></i></span></Link>
            <Link to="#"><span className="circle tw"><i class="fa-brands fa-twitter"></i></span></Link>
          </div>
        </div>

        {/* Tour */}
        <div className="footer-col">
          <h3>TOUR</h3>
          <Link >Thailand</Link>
          <Link>Vietnam</Link>
          <Link >Cambodia</Link>
          <Link >Korea</Link>
          <Link >Japan</Link>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>SUPPORT</h3>
          <Link >Account</Link>
          <Link >Legal</Link>
          <Link >Contact</Link>
          <Link>Affiliate Program</Link>
          <Link>Privacy Policy</Link>
        </div>

        {/* Useful */}
        <div className="footer-col">
          <h3>USEFUL PAGES</h3>
          <Link >Deals</Link>
          <Link >FAQs</Link>
          <Link>Why Choose Us</Link>
          <Link >Affiliate Program</Link>
        </div>

      </div>

      {/* Bottom (same rahega) */}
      <div className="footer-bottom">
        <p>Business Number: +12 43223354</p>
        <p>3131 Doctor Drive, Los Angeles, California</p>
        <p>Complaints/Enquiries: easy@traveler.com</p>
      </div>
    </footer>
  );
}

export default Hero20;