import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, // Importing Card component from Material-UI for card layout
CardMedia, // Importing CardMedia component for displaying images
CardContent, // Importing CardContent component for displaying text content inside the card
Button, // Importing Button component from Material-UI for interactive buttons
Typography, // Importing Typography component for text styling
 } from "@mui/material"; // Importing Material-UI components from the library
// Defining MenuItem component with props of type MenuItemProps
const MenuItem = ({ src, name, price, addItem }) => {
    // Styles for the card
    const cardStyles = {
        maxWidth: 300, // Setting maximum width of the card
        margin: "16px auto", // Centering the card with auto margins and 16px vertical margin
        textAlign: "center", // Center-aligning text inside the card
        transition: "transform 0.3s", // Adding a smooth transition effect for transformations
        "&:hover": {
            transform: "scale(1.05)", // Scaling up the card on hover
            backgroundColor: "#F0F0F0", // Changing background color on hover
        },
    };
    // Styles for the title text
    const titleStyles = {
        fontFamily: "'Bechtlers', sans-serif", // Setting font family for the title
        fontWeight: 700, // Setting font weight to bold
    };
    // Styles for the price text
    const priceStyles = {
        fontFamily: "'Bechtlers', sans-serif", // Setting font family for the price
        fontWeight: 700, // Setting font weight to bold
        color: "#333333", // Setting color of the price text
    };
    // Styles for the button
    const buttonStyles = {
        marginBottom: "16px", // Adding bottom margin to the button
        bgcolor: "#000000", // Setting background color to black
        color: "#FFFFFF", // Setting text color to white
        "&:hover": { bgcolor: "#333333" }, // Changing background color on hover
    };
    // Rendering the MenuItem component
    return (_jsxs(Card, { sx: cardStyles, children: [" ", _jsx(CardMedia, { component: "img" // Specifying that this CardMedia component is an image
                , height: "140" // Setting height for the image
                , image: src, alt: name, onError: (e) => // Handling image load error
                 (e.target.src = "https://via.placeholder.com/140") // Setting placeholder image on error
             }), _jsxs(CardContent, { children: [" ", _jsxs(Typography, { variant: "h6", color: "#000000", sx: titleStyles, children: [" ", name, " "] }), _jsxs(Typography, { variant: "body2", sx: priceStyles, children: [" ", "$", price.toFixed(2), " "] })] }), _jsx(Button, { variant: "contained" // Using a contained button style
                , onClick: addItem, sx: buttonStyles, "aria-label": `Add ${name} to cart`, children: "Add Item " })] }));
};
export default MenuItem; // Exporting MenuItem component for use in other parts of the application
