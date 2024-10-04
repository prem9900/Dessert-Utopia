import React from 'react'; // Import React library to use React features
import ContactUsItem from '../../molecules/ContactUsItem'; // Import the ContactUsItem component
import { CONTACT_PAGE_CONTENT } from '../../../utils/constants'; // Import the constant data for the contact page

// Functional component definition for the ContactUs section
const ContactUs: React.FC = () => {
  return (
    <div className="contact-us"> {/* Main container for the contact section */}
      {/* Map over the CONTACT_PAGE_CONTENT array and render a ContactUsItem for each section */}
      {CONTACT_PAGE_CONTENT.map((section, index) => (
        <ContactUsItem key={index} section={section} /> // Render each ContactUsItem with a unique key
      ))}
    </div>
  );
};

export default ContactUs; // Export the ContactUs component for use in other files
