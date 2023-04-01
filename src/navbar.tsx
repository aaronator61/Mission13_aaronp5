import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="ml-auto" style={{ gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/myPodcasts">My Podcasts</Link>
          <Link to="/movie">Movie Collection</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
