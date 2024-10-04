import React, { useEffect, useRef } from "react"; // Import React and hooks
import { Box, Typography } from "@mui/material"; // Import Box and Typography from Material-UI
import { CAROUSEL_ITEMS } from "../../../utils/constants"; // Import constants for carousel items
import CarouselItem from "../../molecules/CarouselItem"; // Import CarouselItem component

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null); // Create a ref for the carousel element
  const combinedItems = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS]; // Duplicate items for seamless scrolling
  const itemHeight = 400; // Set the height for scrolling

  useEffect(() => {
    const carousel = carouselRef.current; // Reference to the carousel element
    const speed = 2000; // Scroll speed in milliseconds
    let scrollTimeout: number; // Variable to store the timeout ID

    if (carousel) { // If the carousel reference is valid
      scrollTimeout = window.setInterval(() => {
        carousel.scrollBy({ // Scroll the carousel down
          top: itemHeight, // Move down by item height
          behavior: "smooth", // Use smooth scrolling
        });

        // Reset scroll position when reaching half the total height
        if (carousel.scrollTop >= carousel.scrollHeight / 2) {
          carousel.scrollTop = 0; // Reset to the top
        }
      }, speed); // Set the interval speed
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (scrollTimeout) {
        window.clearInterval(scrollTimeout); // Clear the interval
      }
    };
  }, [itemHeight]); // Dependency array, rerun effect if itemHeight changes

  return (
    <Box
      sx={{
        display: "flex", // Use flexbox for layout
        flexDirection: "row", // Arrange items in a row
        height: {
          xs: "50vh", // Responsive height for extra small devices
          sm: "60vh", // Responsive height for small devices
          md: "70vh", // Responsive height for medium devices
          lg: "80vh", // Responsive height for large devices
        },
        overflow: "hidden", // Hide overflow to keep the layout clean
        columnGap: "15px", // Gap between columns
        marginTop: {
          xs: "-25px", // Negative margin for extra small devices
          md: "10px", // Margin for medium devices and up
        },
      }}
    >
      {/* Left section with a description */}
      <Box
        sx={{
          width: "50%", // Take half of the width
          display: "flex", // Use flexbox for layout
          alignItems: "center", // Center items vertically
          justifyContent: "center", // Center items horizontally
          backgroundColor: "white", // Background color
          height: "100%", // Full height
          color: "black", // Text color
          padding: {
            xs: "10px", // Padding for extra small devices
            sm: "20px", // Padding for small devices
          },
          textAlign: "center", // Center the text
        }}
      >
        {/* Typography component for the description */}
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "14px", // Font size for extra small devices
              sm: "18px", // Font size for small devices
              md: "29px", // Font size for medium and larger devices
            },
            fontFamily: "'Bechtlers', sans-serif", // Custom font family
            fontWeight: 700, // Bold text
            color: "black", // Text color
            padding: "10px", // Padding around the text
          }}
        >
          A place where you can bring your friends and family to indulge in
          delicious snacks and desserts. {/* Description text */}
        </Typography>
      </Box>

      {/* Right section for the carousel */}
      <Box
        ref={carouselRef} // Set the reference for scrolling
        sx={{
          overflowY: "hidden", // Hide vertical overflow
          display: "flex", // Use flexbox for layout
          flexDirection: "column", // Arrange items vertically
          backgroundColor: "white", // Background color
          height: "100%", // Full height
          width: "50%", // Take half of the width
          alignItems: "center", // Center items horizontally
        }}
      >
        {/* Map through combined items and render CarouselItem for each */}
        {combinedItems.map((item, index) => (
          <CarouselItem key={index} src={item.src} name={item.name} /> // Render CarouselItem
        ))}
      </Box>
    </Box>
  );
};

export default Carousel; // Export the component
