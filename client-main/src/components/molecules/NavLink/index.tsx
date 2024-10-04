import React from "react"; // Importing React
import { MenuItem, styled } from "@mui/material"; // Importing Material-UI components
import { NavLink as RouterNavLink } from "react-router-dom"; // Importing NavLink for routing

// Styled Link to be used inside MenuItem
const StyledLink = styled("span")(({ theme }) => ({
  textDecoration: "none", // No underline on link
  color: "inherit", // Inherit color from parent
  width: "100%", // Full width
  display: "block", // Display as block element
  position: "relative", // Relative positioning for pseudo-elements
  paddingBottom: "5px", // Bottom padding
  fontFamily: "'Bechtlers', sans-serif", // Custom font
  // Using theme for padding
  padding: theme.spacing(0), // Example of using theme for padding

  "&::after": {
    // Pseudo-element for the underline effect
    content: '""', // Empty content
    position: "absolute", // Absolute positioning
    left: 0, // Align to left
    bottom: 0, // Align to bottom
    width: "100%", // Full width
    height: "1px", // Thickness of the underline
    backgroundColor: "black", // Underline color
    opacity: 0, // Hidden by default
    transition: "opacity 0.3s", // Smooth transition for opacity
  },
  "&.active::after": {
    // Style when active
    opacity: 1, // Show underline when active
  },
  "&:hover::after": {
    // Style on hover
    opacity: 1, // Show underline on hover
  },
}));

// Styled MenuItem
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  margin: theme.spacing(0, 1), // Margin for MenuItem
  fontFamily: "'Bechtlers', sans-serif", // Custom font
  fontWeight: 300, // Light font weight
  fontSize: "24px", // Font size
  lineHeight: "36px", // Line height
  letterSpacing: "0.00735em", // Letter spacing
  textAlign: "center", // Center text

  // Media query for responsiveness
  "@media (max-width: 768px)": {
    fontSize: "16px", // Smaller font size on mobile
    boxShadow: "none", // Remove shadow on mobile
  },
}));

// NavLinks functional component
const NavLinks: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  return (
    <StyledMenuItem>
      <RouterNavLink
        to={to} // Link destination
        style={{ textDecoration: "none", color: "inherit" }} // Custom styles
        className={({ isActive }) => (isActive ? "active" : "")} // Active class
      >
        <StyledLink>{label}</StyledLink> {/* Display link label */}
      </RouterNavLink>
    </StyledMenuItem>
  );
};

export default NavLinks; // Exporting NavLinks component
