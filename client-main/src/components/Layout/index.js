import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom"; // Use Outlet for route rendering
import NavBar from "../organism/NavBar";
import Footer from "../organism/Footer";
const Layout = () => {
    return (_jsxs(Box, { sx: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", // Full viewport height
            overflowX: "hidden", // Prevent horizontal scrolling
        }, children: [_jsx(Box, { sx: {
                    position: "sticky",
                    top: 0,
                    zIndex: 1000, // Ensure Navbar stays on top of other content
                    backgroundColor: "background.paper", // Ensure background is set
                }, children: _jsx(NavBar, {}) }), _jsx(Container, { component: "main", sx: {
                    flexGrow: 1, // Allow content to take up remaining space
                    py: { xs: 2, md: 3 }, // Responsive vertical padding (smaller on mobile)
                    px: { xs: 2, md: 3 }, // Responsive horizontal padding
                }, children: _jsx(Box, { sx: {
                        pt: { xs: 10, md: 15 }, // Adjust padding between Navbar and content
                    }, children: _jsx(Outlet, {}) }) }), _jsx(Footer, {})] }));
};
export default Layout;
