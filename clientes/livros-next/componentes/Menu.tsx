import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const Menu: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
       
        <Nav >
          <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
          <Nav.Link style={{color:"white"}} href="/LivroLista">Catálogo</Nav.Link>
          <Nav.Link style={{color:"white"}} href="/LivroDados">Novo</Nav.Link>
        </Nav>
        
      </Navbar>
    </>
    
  );
}
