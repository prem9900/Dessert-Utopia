import React from "react"; // Importing React library
import {
  Card, // Importing Card component from Material-UI for card layout
  CardMedia, // Importing CardMedia component for displaying images
  CardContent, // Importing CardContent component for displaying text content inside the card
  Button, // Importing Button component from Material-UI for interactive buttons
  Typography, // Importing Typography component for text styling
} from "@mui/material"; // Importing Material-UI components from the library
import { MenuItemProps } from "../../../utils/types"; // Importing type definitions for props

// Defining MenuItem component with props of type MenuItemProps
const MenuItem: React.FC<MenuItemProps> = ({ src, name, price, addItem }) => {
  // Styles for the card
  const cardStyles = {
    maxWidth: 300, // Setting maximum width of the card
    margin: "16px auto", // Centering the card with auto margins and 16px vertical margin
    textAlign: "center", // Center-aligning text inside the card
    transition: "transform 0.3s", // Adding a smooth transition effect for transformations
    "&:hover": { // Applying styles on hover
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
  return (
    <Card sx={cardStyles}> {/* Using Card component with defined styles */}
      <CardMedia
        component="img" // Specifying that this CardMedia component is an image
        height="140" // Setting height for the image
        image={src} // Passing image source from props
        alt={name} // Setting alt text for accessibility
        onError={(e) => // Handling image load error
          ((e.target as HTMLImageElement).src = "https://via.placeholder.com/140") // Setting placeholder image on error
        }
      />
      <CardContent> {/* Wrapping content inside CardContent */}
        <Typography variant="h6" color="#000000" sx={titleStyles}> {/* Using Typography for the name with defined styles */}
          {name} {/* Displaying the name prop */}
        </Typography>
        <Typography variant="body2" sx={priceStyles}> {/* Using Typography for the price with defined styles */}
          ${price.toFixed(2)} {/* Displaying price formatted to two decimal places */}
        </Typography>
      </CardContent>
      <Button
        variant="contained" // Using a contained button style
        onClick={addItem} // Calling addItem function on button click
        sx={buttonStyles} // Applying styles to the button
        aria-label={`Add ${name} to cart`} // Adding accessible label for the button
      >
        Add Item {/* Button text */}
      </Button>
    </Card>
  );
};

export default MenuItem; // Exporting MenuItem component for use in other parts of the application
