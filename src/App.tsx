import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Lead Gen - Continued Flow Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/v1">V1</Nav.Link>
            <Nav.Link href="/v2">V2</Nav.Link>
            <Nav.Link href="/v3">V3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Router>
        <Routes>
          <Route path="/" element={<h2>v1</h2>} />
          <Route path="/v1" element={<h2>v1</h2>} />
          <Route path="/v2" element={<h2>v2</h2>} />
          <Route path="/v3" element={<h2>v3</h2>} />
          {/* not found */}
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
