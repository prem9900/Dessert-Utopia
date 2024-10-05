// Importing React to enable JSX usage
import React from "react";

// Importing components from Material-UI to use its design system for layout, typography, grids, and icons
import { Box, Typography, Grid, IconButton, Link, styled } from "@mui/material";

// Importing specific Material-UI icons to display social media and contact information
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Importing the logo image for the footer
import Logo from "../../../assets/images/LOGO.jpeg"; // Adjust the path according to your project structure

// Functional Styling Section

// Creating a styled Box (a Material-UI container) to act as the main footer container
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000", // Black background
  color: "#fff", // White text color
  padding: theme.spacing(5, 2), // Padding of 5 units top/bottom and 2 units left/right
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 2), // Larger padding for medium and up screen sizes
  },
  marginTop: theme.spacing(3), // Space above the footer
  width: "100%", // Ensures the footer takes the full width of the page
}));

// Creating a styled Typography component for copyright text
const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "#fff", // White text color
  fontWeight: 700, // Bold text
  fontFamily: "'Bechtlers', sans-serif", // Custom font family
  fontSize: "10px", // Small font size for mobile
  lineHeight: 1.2, // Line height of 1.2 for text spacing
  textAlign: "center", // Center-align the text on smaller screens
  [theme.breakpoints.up("md")]: {
    fontSize: "13px", // Slightly larger font size for medium and up screens
  },
}));

// Creating a styled Link component for footer navigation links
const FooterLink = styled(Link)(({ theme }) => ({
  color: "#fff", // White text color
  textDecoration: "none", // Remove underline by default
  fontWeight: 500, // Bold font weight
  fontFamily: "'Bechtlers', sans-serif", // Custom font family
  margin: theme.spacing(1, 2), // Spacing around the links
  fontSize: "14px", // Base font size for links on smaller screens
  lineHeight: 1.5, // Line height for readability
  [theme.breakpoints.up("md")]: {
    fontSize: "18px", // Larger font size for medium screens and above
  },
  "&:hover": {
    // Hover state for the links
    textDecoration: "underline", // Underline the link on hover for better visual feedback
  },
}));

// Custom styles for social media icons
const socialIconStyles = {
  margin: "0 8px", // Space between each icon
  "&:hover": { color: "#ff4081" }, // Change color to pink on hover
};

// Custom styles for the logo image
const logoStyles = {
  width: "200px", // Set logo width to 200px
  height: "auto", // Automatically adjust height based on width
  marginBottom: "16px", // Space below the logo
  borderRadius: "8px", // Rounded corners for the logo image
};

// Custom styles for the header text
const headerStyles = {
  fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size (2rem for small screens, 3.5rem for medium+)
  fontFamily: "'Bechtlers', sans-serif", // Custom font family
  fontWeight: 700, // Bold font weight
  color: "#fff", // White text color
  marginBottom: "16px", // Space below the header
};

// Custom styles for the contact information text
const contactTextStyles = {
  fontSize: { xs: "14px", md: "16px" }, // Responsive font size
  marginBottom: "20px", // Space below each contact line
  lineHeight: 1.5, // Line height for readability
  textAlign: "center", // Center-align the contact info on smaller screens
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={3} justifyContent="center">
        {/* Left Section: Logo and Social Media Icons */}
        <Grid item xs={12} md={4} container direction="column" alignItems="center">
          <img src={Logo} alt="Dessert Utopia Logo" style={logoStyles} />
          <Typography variant="h1" sx={headerStyles}>
            Follow Us
          </Typography>
          <Grid container justifyContent="center">
            {[
              { icon: <FacebookIcon />, link: "https://facebook.com" },
              { icon: <InstagramIcon />, link: "https://instagram.com" },
              { icon: <TwitterIcon />, link: "https://twitter.com" },
              { icon: <EmailIcon />, link: "mailto:contact@dessertutopia.com" },
            ].map((social, index) => (
              <IconButton
                color="inherit"
                href={social.link}
                target="_blank"
                key={index}
                sx={socialIconStyles}
              >
                {social.icon}
              </IconButton>
            ))}
          </Grid>
        </Grid>

        {/* Center Section: Navigation Links */}
        <Grid item xs={12} md={4} container direction="column" alignItems="center">
          <Grid container justifyContent="center">
            {["/", "/menu", "/about", "/contact"].map((path, index) => (
              <FooterLink href={path} key={index}>
                {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
              </FooterLink>
            ))}
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          </Grid>
        </Grid>

        {/* Right Section: Contact Information */}
        <Grid item xs={12} md={4} container direction="column" alignItems="center">
          <Typography variant="body1" sx={contactTextStyles}>
            <PhoneIcon fontSize="small" /> 7702830880
          </Typography>
          <Typography variant="body1" sx={contactTextStyles}>
            <EmailIcon fontSize="small" /> dessertutopia@gmail.com
          </Typography>
          <Typography variant="body1" sx={contactTextStyles} marginRight={6}>
            <LocationOnIcon fontSize="small" /> Shalivahana Multi Speciality Hospital, Shalivahana Nagar, Dilsukhnagar, Hyderabad, Telangana 500036
          </Typography>
        </Grid>
      </Grid>

      {/* Horizontal line for separation */}
      <Box my={2} borderTop="1px solid #fff" width="90%" mx="auto" />

      {/* Copyright section */}
      <Box mt={2} textAlign="center">
        <CopyrightText variant="body2">
          © {new Date().getFullYear()} Dessert Utopia. All rights reserved.
        </CopyrightText>
      </Box>
    </FooterContainer>
  );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;












