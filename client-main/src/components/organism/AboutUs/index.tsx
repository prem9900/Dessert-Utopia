import React from 'react';
import { Box, Container } from '@mui/material';
import { ABOUT_US_CONTENT } from '../../../utils/constants'; // Import the content data
import AboutUsItem from '../../molecules/AboutUsItem'; // Import the AboutUsItem component

// Functional component for rendering the About Us section
const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px' }}> {/* Container for layout */}
      {ABOUT_US_CONTENT.map((section, index) => ( // Map over the content array
        <Box key={index} sx={{ marginBottom: '60px' }}> {/* Box for spacing */}
          <AboutUsItem section={section} /> {/* Render each AboutUsItem */}
        </Box>
      ))}
    </Container>
  );
};

export default AboutUs;
