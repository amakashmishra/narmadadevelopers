// // src/components/EnquireNowButton.jsx
// import React from 'react'
// import { Link } from 'react-router-dom'
// import './EnquireNowButton.css'

// const EnquireNowButton = () => {
//   const handleWhatsAppClick = (type) => {
//     const phoneNumber = "918087287499"; // Indian number with country code
//     const message = `Hi, I am interested in your ${type} property. Please share more details.`;
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };
//   return (
//     <div className="enquiry-fixed">
//       <Link to="/contact" className="enquire-now-btn">
//         Enquire Now
//       </Link>
//     </div>
//   )
// }

// export default EnquireNowButton


// src/components/EnquireNowButton.jsx
import React from 'react'
import './EnquireNowButton.css'

const EnquireNowButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918087287499"; // Indian number with country code
    const message = `Hi, I am interested in your property. Please share more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="enquiry-fixed">
      <button
        className='enquire-now-btn'
        onClick={handleWhatsAppClick}
      >
        Enquire Now
      </button>
    </div>
  );
};

export default EnquireNowButton;

