import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Grid, Box } from "@mui/material";
// Functional component for displaying individual About Us sections
const AboutUsItem = ({ section }) => {
    return (_jsxs(Grid, { container: true, spacing: 2, alignItems: "center" // Center items vertically
        , sx: { marginBottom: "40px" }, children: [_jsxs(Grid, { item: true, xs: 12, md: 6, children: [_jsx(Typography, { variant: "h4" // Typography variant for header
                        , gutterBottom // Add space below the text
                        : true, sx: {
                            color: "#000000", // Text color
                            textAlign: "center", // Center the text
                            fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size
                            fontFamily: "'Bechtlers', sans-serif", // Custom font family
                            fontWeight: 700, // Bold font weight
                        }, children: section.title }), _jsx(Typography, { variant: "body1", children: section.content }), " "] }), _jsx(Grid, { item: true, xs: 12, md: 6, children: section.mediaType === "image" ? (_jsx(Box, { component: "img" // Render as an image
                    , src: section.mediaSrc, alt: section.title, sx: {
                        width: "100%", // Full width
                        maxWidth: "400px", // Max width
                        borderRadius: "8px", // Rounded corners
                        height: "auto", // Maintain aspect ratio
                        maxHeight: "300px", // Max height
                        "@media (max-width: 600px)": {
                            width: "100%", // Full width on mobile
                            maxWidth: "100%", // No max width on mobile
                        },
                    } })) : (
                // If the media type is a video
                _jsx(Box, { component: "video" // Render as a video
                    , controls // Show video controls
                    : true, src: section.mediaSrc, sx: {
                        width: "100%", // Full width
                        maxWidth: "400px", // Max width
                        borderRadius: "8px", // Rounded corners
                        height: "auto", // Maintain aspect ratio
                        maxHeight: "300px", // Max height
                        "@media (max-width: 600px)": {
                            width: "100%", // Full width on mobile
                            maxWidth: "100%", // No max width on mobile
                        },
                    } })) })] }));
};
export default AboutUsItem;
