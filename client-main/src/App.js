import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Contact from "./Pages/ContactUsPage";
import Layout from "./components/Layout";
import Menu from "./Pages/MenuPage";
import About from "./Pages/AboutUsPage";
import LoadingSpinner from "./components/atoms/LoadingSpinner";
const App = () => {
    const [loading, setLoading] = useState(true);
    // Simulate loading time for demonstration
    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1 seconds delay for demo, adjust as necessary
        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);
    return (_jsx(Router, { children: loading ? (_jsx(LoadingSpinner, {})) : (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "menu", element: _jsx(Menu, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "contact", element: _jsx(Contact, {}) })] }) })) }));
};
export default App;
