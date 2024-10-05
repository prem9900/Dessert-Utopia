import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container } from '@mui/material';
import { ABOUT_US_CONTENT } from '../../../utils/constants'; // Import the content data
import AboutUsItem from '../../molecules/AboutUsItem'; // Import the AboutUsItem component
// Functional component for rendering the About Us section
const AboutUs = () => {
    return (_jsxs(Container, { maxWidth: "lg", sx: { paddingTop: '40px' }, children: [" ", ABOUT_US_CONTENT.map((section, index) => ( // Map over the content array
            _jsxs(Box, { sx: { marginBottom: '60px' }, children: [" ", _jsx(AboutUsItem, { section: section }), " "] }, index)))] }));
};
export default AboutUs;
