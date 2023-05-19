import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Version1 from './components/views/Version1';
import Version2 from './components/views/Version2';
import Version3 from './components/views/Version3';
import { LeadDataContext, LeadsData } from './store/MyContext';
import useFetch from './hooks/useFetch';

function App() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Lead Gen - Continued Flow Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/v1">V1</Nav.Link>
            <Nav.Link href="/v2">V2</Nav.Link>
            <Nav.Link href="/v3">V3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/" element={<Version1 />} />
          <Route path="/v1" element={<Version1 />} />
          <Route path="/v2" element={<Version2 />} />
          <Route path="/v3" element={<Version3 />} />
          {/* not found */}
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
