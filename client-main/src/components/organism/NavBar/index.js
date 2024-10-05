import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react"; // Importing React
import { AppBar, Toolbar, IconButton, Menu, Grid, styled, MenuItem, useMediaQuery, useTheme, } from "@mui/material"; // Importing Material-UI components
import MenuIcon from "@mui/icons-material/Menu"; // Importing MenuIcon
import { NAV_LINKS } from "../../../utils/constants"; // Importing navigation links
import Logo from "../../../assets/logos/DU LOGO.png"; // Importing logo image
import NavLinks from "../../molecules/NavLink"; // Importing NavLinks component
// Styled AppBar to remove border and set background color
const StyledAppBar = styled(AppBar)({
    backgroundColor: "#f5f5f5", // Background color
    color: "black", // Text color
    border: "none", // No border
    boxShadow: "none", // No shadow
});
// Styled component for the logo image
const LogoImage = styled("img")(({ theme }) => ({
    height: 80, // Default height
    [theme.breakpoints.up("md")]: {
        // Responsive height for larger screens
        height: 140, // Height for medium and larger screens
    },
}));
// Styled component for the mobile menu
const MobileMenu = styled(Menu)({
    "& .MuiMenu-paper": {
        // Styling the menu paper
        marginTop: "1.5rem", // Margin from the top
        left: 0, // Align to left
        maxWidth: "100%", // Max width
        border: "none", // No border
        boxShadow: "none", // No shadow
    },
});
// NavBar functional component
const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null); // State for menu anchor element
    const isMenuOpen = Boolean(anchorEl); // Boolean state for menu visibility
    const theme = useTheme(); // Hook for theme
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if view is mobile
    // Function to handle menu opening
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget); // Set anchor element to the event target
    };
    // Function to handle menu closing
    const handleMenuClose = () => {
        setAnchorEl(null); // Reset anchor element
    };
    return (_jsx(StyledAppBar, { children: _jsxs(Toolbar, { children: [_jsxs(Grid, { container: true, alignItems: "center", justifyContent: "space-between", children: [" ", _jsxs(Grid, { item: true, xs: 6, md: 2, container: true, alignItems: "center", children: [_jsx(LogoImage, { src: Logo, alt: "Dessert Utopia Logo" }), " "] }), !isMobile && ( // Conditional rendering based on mobile view
                        _jsx(Grid, { item: true, xs: false, md: 8, container: true, alignItems: "center", justifyContent: "center", children: NAV_LINKS.map((link // Mapping through navigation links
                            ) => (_jsx(NavLinks, { to: link.to, label: link.label }, link.to))) })), isMobile && ( // Conditional rendering for mobile
                        _jsx(Grid, { item: true, xs: 6, container: true, alignItems: "center", justifyContent: "flex-end", children: _jsxs(IconButton, { edge: "end" // Positioning
                                , color: "inherit" // Inherit color
                                , "aria-label": "menu" // Accessibility label
                                , onClick: handleMenuOpen, children: [_jsx(MenuIcon, {}), " "] }) }))] }), _jsx(MobileMenu, { anchorEl: anchorEl, open: isMenuOpen, onClose: handleMenuClose, children: NAV_LINKS.map((link // Mapping through navigation links for mobile
                    ) => (_jsxs(MenuItem, { onClick: handleMenuClose, children: [_jsx(NavLinks, { to: link.to, label: link.label }), " "] }, link.to))) })] }) }));
};
export default NavBar; // Exporting NavBar component
