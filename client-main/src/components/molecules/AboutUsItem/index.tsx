import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { AboutUsSection } from "../../../utils/types";

// Define the props for the AboutUsItem component
interface AboutUsItemProps {
  section: AboutUsSection; // Expect a section of type AboutUsSection
}

// Functional component for displaying individual About Us sections
const AboutUsItem: React.FC<AboutUsItemProps> = ({ section }) => {
  return (
    <Grid
      container
      spacing={2} // Space between items in the grid
      alignItems="center" // Center items vertically
      sx={{ marginBottom: "40px" }} // Margin at the bottom of the section
    >
      <Grid item xs={12} md={6}>
        {/* Title of the section with custom styles */}
        <Typography
          variant="h4" // Typography variant for header
          gutterBottom // Add space below the text
          sx={{
            color: "#000000", // Text color
            textAlign: "center", // Center the text
            fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size
            fontFamily: "'Bechtlers', sans-serif", // Custom font family
            fontWeight: 700, // Bold font weight
          }}
        >
          {section.title}
        </Typography>
        <Typography variant="body1">{section.content}</Typography>{" "}
        {/* Display the content */}
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Check if the media type is an image */}
        {section.mediaType === "image" ? (
          <Box
            component="img" // Render as an image
            src={section.mediaSrc} // Source of the image
            alt={section.title} // Alternative text for accessibility
            sx={{
              width: "100%", // Full width
              maxWidth: "400px", // Max width
              borderRadius: "8px", // Rounded corners
              height: "auto", // Maintain aspect ratio
              maxHeight: "300px", // Max height
              "@media (max-width: 600px)": {
                width: "100%", // Full width on mobile
                maxWidth: "100%", // No max width on mobile
              },
            }}
          />
        ) : (
          // If the media type is a video
          <Box
            component="video" // Render as a video
            controls // Show video controls
            src={section.mediaSrc} // Source of the video
            sx={{
              width: "100%", // Full width
              maxWidth: "400px", // Max width
              borderRadius: "8px", // Rounded corners
              height: "auto", // Maintain aspect ratio
              maxHeight: "300px", // Max height
              "@media (max-width: 600px)": {
                width: "100%", // Full width on mobile
                maxWidth: "100%", // No max width on mobile
              },
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default AboutUsItem;
