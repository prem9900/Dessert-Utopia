import React, { useState } from "react"; // Importing React library and useState hook for managing state
import { Grid, Button, Typography } from "@mui/material"; // Importing Grid, Button, and Typography components from Material-UI for layout and styling
import MenuItem from "../../molecules/MenuItem"; // Importing MenuItem component to display individual menu items
import { MenuItemProps } from "../../../utils/types"; // Importing type definitions for menu item properties

// Defining the MenuProps interface to type the props for the Menu component
interface MenuProps {
  title: string; // Title of the menu
  items: MenuItemProps[]; // Array of menu items defined by MenuItemProps
}

// Defining the Menu component as a functional component
const Menu: React.FC<MenuProps> = ({ title, items }) => {
  // State variable to keep track of the number of visible items, initialized to 1
  const [visibleItems, setVisibleItems] = useState(1);

  // Function to increase the number of visible items by 6, up to the total number of items
  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + 6, items.length)); // Updates visibleItems to the minimum of previous + 6 or total items
  };

  // Function to reset the number of visible items to 1
  const showLessItems = () => {
    setVisibleItems(1); // Sets visibleItems back to 1
  };

  // Rendering the Menu component
  return (
    <>
      {/* Displaying the title of the menu */}
      <Typography variant="h2" sx={{ textAlign: "center", marginBottom: "16px" }}>
        {title} {/* Rendering the title passed as a prop */}
      </Typography>
      
      {/* Using Grid to layout the menu items */}
      <Grid container spacing={2} justifyContent="center"> {/* Grid container with spacing and centered alignment */}
        {items.slice(0, visibleItems).map((item) => ( // Slicing the items array to show only the visible items
          <Grid item xs={12} sm={6} md={4} key={item.name}> {/* Grid item that adapts to different screen sizes */}
            <MenuItem {...item} /> {/* Rendering the MenuItem component and spreading item properties */}
          </Grid>
        ))}
      </Grid>
      
      {/* Grid container for buttons to show more or less items */}
      <Grid container justifyContent="center" sx={{ marginTop: "16px" }}>
        {/* Conditional rendering of the "Show More" button */}
        {visibleItems < items.length && ( // Only show if there are more items to display
          <Button
            variant="contained" // Using a contained button style
            onClick={showMoreItems} // Calling showMoreItems function on click
            sx={{
              bgcolor: "#000000", // Setting background color to black
              color: "#FFFFFF", // Setting text color to white
              "&:hover": { bgcolor: "#333333" }, // Changing background color on hover
            }}
            aria-label="Show more items" // Accessible label for screen readers
          >
            Show More {/* Button text */}
          </Button>
        )}
        {/* Conditional rendering of the "Show Less" button */}
        {visibleItems > 1 && ( // Only show if there are more than one visible items
          <Button
            variant="outlined" // Using an outlined button style
            onClick={showLessItems} // Calling showLessItems function on click
            sx={{
              borderColor: "#000000", // Setting border color to black
              color: "#000000", // Setting text color to black
              "&:hover": { borderColor: "#333333", color: "#333333" }, // Changing border and text color on hover
            }}
            aria-label="Show fewer items" // Accessible label for screen readers
          >
            Show Less {/* Button text */}
          </Button>
        )}
      </Grid>
    </>
  );
};

export default Menu; // Exporting Menu component for use in other parts of the application
