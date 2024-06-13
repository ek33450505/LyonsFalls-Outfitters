// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import Results from "./Components/Results";
import RaceReport from "./Components/RaceReport";

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const years = Array.from({ length: 5 }, (_, i) => 2024 - i);

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar
            expand="lg"
            className="navBar-main"
            sticky="top"
            expanded={expanded}
          >
            <Container>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(!expanded)}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>
                    Home
                  </Nav.Link>
                  <NavDropdown title="Results" id="results-dropdown">
                    {years.map((year) => (
                      <NavDropdown.Item
                        key={year}
                        as={Link}
                        to={`/results/${year}`}
                        onClick={handleNavLinkClick}
                      >
                        {year}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <Nav.Link as={Link} to="/race-report" onClick={handleNavLinkClick}>
                    Race Report
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mainContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results/:year" element={<Results />} />
              <Route path="/race-report" element={<RaceReport />} />
              <Route path="*" element={<Home />} /> {/* Redirect all other paths to Home */}
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;

