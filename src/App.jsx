import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
