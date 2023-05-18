import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Version3 from './components/Version3';
import { LeadDataContext, LeadsData } from './store/MyContext';
import useFetch from './hooks/useFetch';

const lead_id = 6223272841088085;
const access_token = 'EAAGJ1PZAujwsBAPYHaWOuDoTNtmEC6931Gd4zgWHYfPZAqXZAP5ZC8oZBv4O8xmpAa5ZB3uZC7pSAPLiOWMzIt8EbX8N7xemvwMwM61TWVtwa0tgLxX2W0jNriS8CZAQIWz0u6fZCbiYFE5FQKuXrLgaxwSCozGSFKJbBqZAH8brxt3LVYkOBUeWZA2f1uMcGZCkIYWZAIygQiuLgdUZB8ZCZCDVoD2jQ9vOMO8S2Y319K5PTm4UOXZBSXxz8ZAYkL';
const url = `https://graph.facebook.com/v16.0/${lead_id}?access_token=${access_token}`
const options = {
  method: 'GET',
}

function App() {
  const [leadData, setLeadData] = useState<LeadsData | null>(null);
  const { data, error } = useFetch<LeadsData>(url, options)

  // if (data) { setLeadData(data); }
  // if (error) { console.error(error); }
  useEffect(() => {
    if(data){
      console.log(data);
    }
  })

  return (
    <LeadDataContext.Provider value={leadData}>
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
    </LeadDataContext.Provider>
  );
}

export default App;
