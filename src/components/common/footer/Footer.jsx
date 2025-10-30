import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import Logo from "../../../assets/Icons/logo.jpeg";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";
import qrcode from "../../../assets/Images/quarecode.jpg";
import MAHARERA from "../../../assets/Images/maharera-logo-EA64458FDF-seeklogo.com.png";

const Footer = () => {
  return (
    <>
      <section className="rera-section">
        <div className="images">
          <img src={qrcode} alt="MahaRERA QR Code" />
          <img src={MAHARERA} alt="MahaRERA Logo" />
        </div>

        <div className="text-content">
          <p className="label">MAHARERA QR Code</p>

          <p>
            This project has been registered via MahaRERA registration number
            <strong> P52000079893 </strong>and the details are available on the website{" "}
            <a
              href="https://maharera.mahaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://maharera.mahaonline.gov.in
            </a>{" "}
            under registered projects. Site Address: Plot No. 62, Plot No 4 at
            Deulwadi Karjat, Raigarh, 410201
          </p>

          <h3>DISCLAIMER</h3>
          <p>
            The contents of the website are being modified in terms of the stipulations/recommendations under the Real Estate Regulation Act, 2016 and rules made thereunder ("RERA") and accordingly, may not be fully in line thereof as of date. The content provided on this Site is intended for informational and visual purposes only and is not intended to constitute an offer or solicitation of any kind. It is artistic impression of the proposed project/layout shown on this site and is indicative of how the unit can be used. No furniture, landscape amenities or accessories shown in the visuals are provided with the apartment. All homes about which information is provided herein are subject to prior sale. We do not make any representation or give any warranty, guarantee, condition, undertaking or term either expressed or implied as to the condition, quality, state of readiness or fitness for purpose of any property or any other information on our sites. No person employed or engaged by or on behalf of us has any authority to make or give any representation or warranty whatever in relation to any property. The company is not liable for any consequences and/or any action taken by the viewer relying on the material or information on this website.
          </p>
        </div>
      </section>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/contact">
              <button className='btn5'>Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          {/* Column 1 - Logo & Newsletter */}
          <div className='box'>
            <div className='logo'>
              <img src={Logo} alt='DevGroup Logo' />
              <h2>Need Help With Anything?</h2>
              <p>Receive updates, hot deals, and more directly to your inbox.</p>
              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className='box'>
            <h3>{footer[0].title}</h3>
            <ul>
              {footer[0].text.map((item, i) => {
                console.log("item", item);
                return (
                  <li key={i}>
                    <Link to={item.path}>
                      {item.list}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className='box contact-info'>
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FaMapMarkerAlt /> &nbsp; Shop no.-24,New Vijaya Bhuvan Society, Dadiseth Road,S V Road,Malad(w),Mumbai-64
              </li>
              <li>
                <FaMapMarkerAlt /> &nbsp; Site Address - Plot No. 62, Plot No 4 at Deulwadi Karjat, Raigarh, 410201
              </li>
              <li>
                <FaEnvelope /> &nbsp; narmadadevelopers2023@gmail.com
              </li>
              <li>
                <FaPhoneAlt /> &nbsp; +91 8087287499, 9819869006
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className='box social'>
            <h3>Follow Us</h3>
            <div className='social-icons'>
              <a href='https://facebook.com' target='_blank' rel='noreferrer'><FaFacebookF /></a>
              <a href='https://instagram.com' target='_blank' rel='noreferrer'><FaInstagram /></a>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
              <a href='https://youtube.com' target='_blank' rel='noreferrer'><FaYoutube /></a>
              <a href='https://twitter.com' target='_blank' rel='noreferrer'><FaTwitter /></a>
            </div>
          </div>
        </div>
      </footer>

      <div className='legal'>
        <span>© 2025 DevGroup. Designed By AKASH MISHRA.</span>
      </div>
    </>
  );
};

export default Footer;
