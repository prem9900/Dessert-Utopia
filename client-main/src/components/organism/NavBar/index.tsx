import React from "react"; // Importing React
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Grid,
  styled,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material"; // Importing Material-UI components
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
const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // State for menu anchor element
  const isMenuOpen = Boolean(anchorEl); // Boolean state for menu visibility

  const theme = useTheme(); // Hook for theme
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if view is mobile

  // Function to handle menu opening
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Set anchor element to the event target
  };

  // Function to handle menu closing
  const handleMenuClose = () => {
    setAnchorEl(null); // Reset anchor element
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {" "}
          {/* Flex container for layout */}
          {/* Logo section */}
          <Grid item xs={6} md={2} container alignItems="center">
            <LogoImage src={Logo} alt="Dessert Utopia Logo" />{" "}
            {/* Logo image */}
          </Grid>
          {/* Nav Links for Desktop View */}
          {!isMobile && ( // Conditional rendering based on mobile view
            <Grid
              item
              xs={false}
              md={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              {NAV_LINKS.map(
                (
                  link // Mapping through navigation links
                ) => (
                  <NavLinks key={link.to} to={link.to} label={link.label} />
                )
              )}
            </Grid>
          )}
          {/* Menu Icon for Mobile View */}
          {isMobile && ( // Conditional rendering for mobile
            <Grid
              item
              xs={6}
              container
              alignItems="center"
              justifyContent="flex-end"
            >
              <IconButton
                edge="end" // Positioning
                color="inherit" // Inherit color
                aria-label="menu" // Accessibility label
                onClick={handleMenuOpen} // OnClick event
              >
                <MenuIcon /> {/* Menu icon */}
              </IconButton>
            </Grid>
          )}
        </Grid>

        {/* Menu for Mobile View */}
        <MobileMenu
          anchorEl={anchorEl} // Anchor element for menu
          open={isMenuOpen} // Menu visibility
          onClose={handleMenuClose} // Close event
        >
          {NAV_LINKS.map(
            (
              link // Mapping through navigation links for mobile
            ) => (
              <MenuItem key={link.to} onClick={handleMenuClose}>
                <NavLinks to={link.to} label={link.label} />{" "}
                {/* NavLink for mobile menu */}
              </MenuItem>
            )
          )}
        </MobileMenu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar; // Exporting NavBar component
