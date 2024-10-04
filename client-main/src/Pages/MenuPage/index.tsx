import React from "react"; // Importing React library to use React features
import { Typography, Grid } from "@mui/material"; // Importing Typography and Grid components from Material-UI for layout and styling
import Menu from "../../components/organism/Menu"; // Importing the Menu component to display various menu items
import {
  WAFFLES_ITEMS, // Importing constant array of waffle items
  PANCAKES_ITEMS, // Importing constant array of pancake items
  CHURROS_ITEMS, // Importing constant array of churro items
  SANDWICHES_ITEMS, // Importing constant array of sandwich items
  BREAD_CRAVINGS_ITEMS, // Importing constant array of bread craving items
  MAGGI_ITEMS, // Importing constant array of Maggi items
  MOMS_ITEMS, // Importing constant array of mom's special items
  FRIES_ITEMS, // Importing constant array of fries items
  MILK_SHAKES_ITEMS, // Importing constant array of milkshake items
  SOFT_DRINKS_ITEMS, // Importing constant array of soft drink items
} from "../../utils/constants"; // Importing item constants from a utilities file

// Defining styles for the section titles
const sectionTitleStyle = {
  color: "#000000", // Setting text color to black
  textAlign: "center", // Center-aligning the text
  fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size for different screen sizes
  fontFamily: "'Bechtlers', sans-serif", // Setting custom font family
  fontWeight: 700, // Setting font weight to bold
  marginBottom: "20px", // Adding bottom margin for spacing
};

// Defining the MenuPage functional component
const MenuPage: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "16px" }}> {/* Grid container with spacing and padding */}
      <Grid item xs={12}> {/* Grid item taking full width on all screen sizes */}
        <Typography variant="h1" sx={sectionTitleStyle}> {/* Typography for the main title */}
          Artisan Dessert Creations {/* Title text */}
        </Typography>
      </Grid>

      {/* Dessert Sections */}
      {[
        { title: "Waffles", items: WAFFLES_ITEMS }, // Object for Waffles section
        { title: "Pancakes", items: PANCAKES_ITEMS }, // Object for Pancakes section
        { title: "Churros", items: CHURROS_ITEMS }, // Object for Churros section
      ].map((section, index) => ( // Mapping through dessert sections to render them
        <Grid item xs={12} mt={10} key={index}> {/* Grid item for each section with top margin */}
          <Menu title={section.title} items={section.items} /> {/* Rendering the Menu component with title and items */}
        </Grid>
      ))}

      {/* Savory Delights Section */}
      <Grid item xs={12} mt={10}> {/* Grid item for the Savory Delights title */}
        <Typography variant="h1" sx={sectionTitleStyle}> {/* Typography for Savory Delights title */}
          Savory Delights {/* Title text */}
        </Typography>
      </Grid>
      {[
        { title: "Sandwiches", items: SANDWICHES_ITEMS }, // Object for Sandwiches section
        { title: "Bread Cravings", items: BREAD_CRAVINGS_ITEMS }, // Object for Bread Cravings section
        { title: "Maggi", items: MAGGI_ITEMS }, // Object for Maggi section
        { title: "Mom's Special", items: MOMS_ITEMS }, // Object for Mom's Special section
        { title: "Fries", items: FRIES_ITEMS }, // Object for Fries section
      ].map((section, index) => ( // Mapping through savory sections to render them
        <Grid item xs={12} mt={10} key={index}> {/* Grid item for each section with top margin */}
          <Menu title={section.title} items={section.items} /> {/* Rendering the Menu component with title and items */}
        </Grid>
      ))}

      {/* Drinks Section */}
      <Grid item xs={12} mt={10}> {/* Grid item for the Drinks title */}
        <Typography variant="h1" sx={sectionTitleStyle}> {/* Typography for Drinks title */}
          Drinks {/* Title text */}
        </Typography>
      </Grid>
      {[
        { title: "Milk Shakes", items: MILK_SHAKES_ITEMS }, // Object for Milk Shakes section
        { title: "Soft Drinks", items: SOFT_DRINKS_ITEMS }, // Object for Soft Drinks section
      ].map((section, index) => ( // Mapping through drinks sections to render them
        <Grid item xs={12} mt={10} key={index}> {/* Grid item for each section with top margin */}
          <Menu title={section.title} items={section.items} /> {/* Rendering the Menu component with title and items */}
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuPage; // Exporting MenuPage component for use in other parts of the application
