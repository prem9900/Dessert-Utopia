import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Contact from "./Pages/ContactUsPage";
import Layout from "./components/Layout";
import Menu from "./Pages/MenuPage";
import About from "./Pages/AboutUsPage";
import LoadingSpinner from "./components/atoms/LoadingSpinner";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time for demonstration
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds delay for demo, adjust as necessary

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="service" element={<Service />} /> */}
          </Route>
        </Routes>
      )}
    </Router>
  );
};

export default App;
