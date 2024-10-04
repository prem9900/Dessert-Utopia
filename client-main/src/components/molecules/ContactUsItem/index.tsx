import React, { useState } from "react"; // Import React and useState for managing component state
import { Typography, Box, TextField, Button, Snackbar } from "@mui/material"; // Import necessary Material-UI components
import { ContactSection } from "../../../utils/types"; // Import the ContactSection type

interface ContactUsItemProps {
  section: ContactSection; // Expect a section of type ContactSection as a prop
}

const ContactUsItem: React.FC<ContactUsItemProps> = ({ section }) => {
  // State for form inputs and feedback messages
  const [name, setName] = useState(""); // State for the name input
  const [email, setEmail] = useState(""); // State for the email input
  const [message, setMessage] = useState(""); // State for the message input
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <Box
      sx={{
        margin: "1rem auto", // Center the Box horizontally with auto margins
        padding: "1rem", // Inner padding for spacing
        maxWidth: "600px", // Limit maximum width for better readability
        borderRadius: "8px", // Round corners of the Box
        backgroundColor: "#FFFFFF", // Background color
        color: "#000000", // Text color
        textAlign: "center", // Center align text
        fontFamily: "'Bechtlers', sans-serif", // Custom font
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size
          color: "#000000", // Text color
          marginBottom: "1rem", // Space below the title
          fontWeight: 700, // Bold font weight
        }}
      >
        {section.title} {/* Render the section title */}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1.2rem", // Font size for the content
          color: "#000000", // Text color
          lineHeight: "1.5", // Line height for readability
          marginBottom: "1.5rem", // Space below the content
        }}
      >
        {section.content} {/* Render the section content */}
      </Typography>

      {/* Conditional rendering for Google Map iframe */}
      {section.mediaType === "map" && (
        <iframe
          src={section.mediaSrc} // Map source
          title="Google Map Location" // Accessibility title
          width="100%" // Full width
          height="300" // Set height
          style={{
            border: 0, // No border
            borderRadius: "8px", // Rounded corners
          }}
          allowFullScreen={true} // Allow fullscreen mode
          loading="lazy" // Lazy load for performance
        />
      )}

      {/* Conditional rendering for the contact form */}
      {section.mediaType === "form" && (
        <form
          onSubmit={handleSubmit} // Handle form submission
          style={{
            display: "flex", // Flexbox layout
            flexDirection: "column", // Stack elements vertically
            marginTop: "1rem", // Space above the form
          }}
        >
          {/* Name input field */}
          <TextField
            label="Name" // Input label
            variant="outlined" // Outlined style
            required // Mark as required
            value={name} // Controlled input value
            onChange={(e) => setName(e.target.value)} // Update state on input change
            sx={{
              margin: "0.5rem 0", // Space around the input
              borderRadius: "4px", // Rounded corners
            }}
          />

          {/* Email input field */}
          <TextField
            label="Email" // Input label
            type="email" // Email type for validation
            variant="outlined" // Outlined style
            required // Mark as required
            value={email} // Controlled input value
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            sx={{
              margin: "0.5rem 0", // Space around the input
              borderRadius: "4px", // Rounded corners
            }}
          />

          {/* Message input field */}
          <TextField
            label="Message/Inquiry" // Input label
            multiline // Allow multiple lines
            rows={4} // Default rows
            variant="outlined" // Outlined style
            required // Mark as required
            value={message} // Controlled input value
            onChange={(e) => setMessage(e.target.value)} // Update state on input change
            sx={{
              margin: "0.5rem 0", // Space around the input
              borderRadius: "4px", // Rounded corners
            }}
          />

          {/* Submit button */}
          <Button
            type="submit" // Submit button type
            variant="contained" // Contained style
            sx={{
              marginTop: "1rem", // Space above the button
              backgroundColor: "#000000", // Background color
              color: "white", // Text color
              borderRadius: "4px", // Rounded corners
              fontFamily: "'Bechtlers', sans-serif", // Custom font
              "&:hover": {
                backgroundColor: "#333333", // Darker on hover
              },
            }}
          >
            Submit {/* Button text */}
          </Button>
        </form>
      )}

      {/* Snackbar for feedback on submission */}
      <Snackbar
        open={openSnackbar} // Control visibility of Snackbar
        autoHideDuration={3000} // Duration before it automatically closes
        onClose={handleCloseSnackbar} // Handle close event
        message="Your message has been sent!" // Feedback message
      />
    </Box>
  );
};

export default ContactUsItem; // Export the ContactUsItem component
