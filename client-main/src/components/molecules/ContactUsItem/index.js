import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react"; // Import React and useState for managing component state
import { Typography, Box, TextField, Button, Snackbar } from "@mui/material"; // Import necessary Material-UI components
const ContactUsItem = ({ section }) => {
    // State for form inputs and feedback messages
    const [name, setName] = useState(""); // State for the name input
    const [email, setEmail] = useState(""); // State for the email input
    const [message, setMessage] = useState(""); // State for the message input
    const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Add your form handling logic here (e.g., send data to API)
        console.log({ name, email, message }); // Log input values for demonstration
        setOpenSnackbar(true); // Show feedback message after submission
        // Clear the form inputs
        setName("");
        setEmail("");
        setMessage("");
    };
    // Function to handle Snackbar close
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false); // Close the Snackbar
    };
    return (_jsxs(Box, { sx: {
            margin: "1rem auto", // Center the Box horizontally with auto margins
            padding: "1rem", // Inner padding for spacing
            maxWidth: "600px", // Limit maximum width for better readability
            borderRadius: "8px", // Round corners of the Box
            backgroundColor: "#FFFFFF", // Background color
            color: "#000000", // Text color
            textAlign: "center", // Center align text
            fontFamily: "'Bechtlers', sans-serif", // Custom font
        }, children: [_jsxs(Typography, { variant: "h4", sx: {
                    fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size
                    color: "#000000", // Text color
                    marginBottom: "1rem", // Space below the title
                    fontWeight: 700, // Bold font weight
                }, children: [section.title, " "] }), _jsxs(Typography, { variant: "body1", sx: {
                    fontSize: "1.2rem", // Font size for the content
                    color: "#000000", // Text color
                    lineHeight: "1.5", // Line height for readability
                    marginBottom: "1.5rem", // Space below the content
                }, children: [section.content, " "] }), section.mediaType === "map" && (_jsx("iframe", { src: section.mediaSrc, title: "Google Map Location" // Accessibility title
                , width: "100%" // Full width
                , height: "300" // Set height
                , style: {
                    border: 0, // No border
                    borderRadius: "8px", // Rounded corners
                }, allowFullScreen: true, loading: "lazy" // Lazy load for performance
             })), section.mediaType === "form" && (_jsxs("form", { onSubmit: handleSubmit, style: {
                    display: "flex", // Flexbox layout
                    flexDirection: "column", // Stack elements vertically
                    marginTop: "1rem", // Space above the form
                }, children: [_jsx(TextField, { label: "Name" // Input label
                        , variant: "outlined" // Outlined style
                        , required // Mark as required
                        : true, value: name, onChange: (e) => setName(e.target.value), sx: {
                            margin: "0.5rem 0", // Space around the input
                            borderRadius: "4px", // Rounded corners
                        } }), _jsx(TextField, { label: "Email" // Input label
                        , type: "email" // Email type for validation
                        , variant: "outlined" // Outlined style
                        , required // Mark as required
                        : true, value: email, onChange: (e) => setEmail(e.target.value), sx: {
                            margin: "0.5rem 0", // Space around the input
                            borderRadius: "4px", // Rounded corners
                        } }), _jsx(TextField, { label: "Message/Inquiry" // Input label
                        , multiline // Allow multiple lines
                        : true, rows: 4, variant: "outlined" // Outlined style
                        , required // Mark as required
                        : true, value: message, onChange: (e) => setMessage(e.target.value), sx: {
                            margin: "0.5rem 0", // Space around the input
                            borderRadius: "4px", // Rounded corners
                        } }), _jsx(Button, { type: "submit" // Submit button type
                        , variant: "contained" // Contained style
                        , sx: {
                            marginTop: "1rem", // Space above the button
                            backgroundColor: "#000000", // Background color
                            color: "white", // Text color
                            borderRadius: "4px", // Rounded corners
                            fontFamily: "'Bechtlers', sans-serif", // Custom font
                            "&:hover": {
                                backgroundColor: "#333333", // Darker on hover
                            },
                        }, children: "Submit " })] })), _jsx(Snackbar, { open: openSnackbar, autoHideDuration: 3000, onClose: handleCloseSnackbar, message: "Your message has been sent!" // Feedback message
             })] }));
};
export default ContactUsItem; // Export the ContactUsItem component
