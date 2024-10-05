import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material"; // Import Box and Typography from Material-UI
// Define a styles object for better reusability
const styles = {
    box: {
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Arrange items vertically
        width: "100%", // Full width
        height: "100%", // Full height
        boxShadow: "0 20px 20px rgba(0, 0, 0, 0.2)", // Add shadow for depth
        borderRadius: "8px", // Rounded corners
        margin: "5px 0", // Margin around the box
        transition: "transform 0.3s ease-in-out", // Smooth transition effect on hover
        "&:hover": {
            transform: "scale(1.05)", // Scale effect on hover
        },
    },
    img: {
        width: "100%", // Image takes full width of the box
        height: "100%", // Image takes full height of the box
        objectFit: "cover", // Cover the box without distorting aspect ratio
        borderRadius: "4px", // Slightly rounded corners for the image
    },
    typography: {
        marginTop: 1, // Top margin for typography
        textAlign: "center", // Center the text
        fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font sizes
        fontFamily: "'Bechtlers', sans-serif", // Custom font family
        fontWeight: 700, // Bold text
    },
};
// Define the CarouselItem functional component
const CarouselItem = ({ src, name }) => {
    return (
    // Box container for the carousel item
    _jsxs(Box, { sx: { ...styles.box, padding: { xs: "8px", sm: "12px", md: "16px" } }, children: [_jsx(Box, { component: "img", src: src, alt: name, sx: styles.img, loading: "lazy" }), _jsxs(Typography, { variant: "subtitle1", sx: {
                    ...styles.typography,
                    fontSize: {
                        xs: "14px", // Font size for extra small devices
                        sm: "16px", // Font size for small devices
                        md: "18px", // Font size for medium and larger devices
                    },
                }, children: [name, " "] })] }));
};
export default CarouselItem; // Export the component
