import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react"; // Importing React library and useState hook for managing state
import { Grid, Button, Typography } from "@mui/material"; // Importing Grid, Button, and Typography components from Material-UI for layout and styling
import MenuItem from "../../molecules/MenuItem"; // Importing MenuItem component to display individual menu items
// Defining the Menu component as a functional component
const Menu = ({ title, items }) => {
    // State variable to keep track of the number of visible items, initialized to 1
    const [visibleItems, setVisibleItems] = useState(1);
    // Function to increase the number of visible items by 6, up to the total number of items
    const showMoreItems = () => {
        setVisibleItems((prev) => Math.min(prev + 90, items.length)); // Updates visibleItems to the minimum of previous + 6 or total items
    };
    // Function to reset the number of visible items to 1
    const showLessItems = () => {
        setVisibleItems(1); // Sets visibleItems back to 1
    };
    // Rendering the Menu component
    return (_jsxs(_Fragment, { children: [_jsxs(Typography, { variant: "h2", sx: { textAlign: "center", marginBottom: "16px" }, children: [title, " "] }), _jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", children: [" ", items.slice(0, visibleItems).map((item) => ( // Slicing the items array to show only the visible items
                    _jsxs(Grid, { item: true, xs: 12, sm: 6, md: 4, children: [" ", _jsx(MenuItem, { ...item }), " "] }, item.name)))] }), _jsxs(Grid, { container: true, justifyContent: "center", sx: { marginTop: "16px" }, children: [visibleItems < items.length && ( // Only show if there are more items to display
                    _jsx(Button, { variant: "contained" // Using a contained button style
                        , onClick: showMoreItems, sx: {
                            bgcolor: "#000000", // Setting background color to black
                            color: "#FFFFFF", // Setting text color to white
                            "&:hover": { bgcolor: "#333333" }, // Changing background color on hover
                        }, "aria-label": "Show more items" // Accessible label for screen readers
                        , children: "Show More " })), visibleItems > 1 && ( // Only show if there are more than one visible items
                    _jsx(Button, { variant: "outlined" // Using an outlined button style
                        , onClick: showLessItems, sx: {
                            borderColor: "#000000", // Setting border color to black
                            color: "#000000", // Setting text color to black
                            "&:hover": { borderColor: "#333333", color: "#333333" }, // Changing border and text color on hover
                        }, "aria-label": "Show fewer items" // Accessible label for screen readers
                        , children: "Show Less " }))] })] }));
};
export default Menu; // Exporting Menu component for use in other parts of the application
