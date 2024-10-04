import React from 'react'; // Import React library to use React features
import ContactUs from '../../components/organism/ContactUs'; // Import the ContactUs component

// Functional component definition for the Contact page
const Contact: React.FC = () => {
  return (
    <div className="contact-us-page"> {/* Main container for the contact page */}
      <ContactUs /> {/* Render the ContactUs component */}
    </div>
  );
};

export default Contact; // Export the Contact component for use in other files
