import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavBar from "./common/NavBar";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Container className="p-0" fluid="true">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
