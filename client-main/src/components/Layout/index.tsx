import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom"; // Use Outlet for route rendering
import NavBar from "../organism/NavBar";
import Footer from "../organism/Footer";

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Full viewport height
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      {/* Sticky Navbar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000, // Ensure Navbar stays on top of other content
          backgroundColor: "background.paper", // Ensure background is set
        }}
      >
        <NavBar />
      </Box>

      {/* Main content container */}
      <Container
        component="main"
        sx={{
          flexGrow: 1, // Allow content to take up remaining space
          py: { xs: 2, md: 3 }, // Responsive vertical padding (smaller on mobile)
          px: { xs: 2, md: 3 }, // Responsive horizontal padding
        }}
      >
        <Box
          sx={{
            pt: { xs: 10, md: 15 }, // Adjust padding between Navbar and content
          }}
        >
          {/* Render the content of the active route */}
          <Outlet />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
