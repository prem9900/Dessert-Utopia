import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContactUsItem from '../../molecules/ContactUsItem'; // Import the ContactUsItem component
import { CONTACT_PAGE_CONTENT } from '../../../utils/constants'; // Import the constant data for the contact page
// Functional component definition for the ContactUs section
const ContactUs = () => {
    return (_jsxs("div", { className: "contact-us", children: [" ", CONTACT_PAGE_CONTENT.map((section, index) => (_jsx(ContactUsItem, { section: section }, index) // Render each ContactUsItem with a unique key
            ))] }));
};
export default ContactUs; // Export the ContactUs component for use in other files
