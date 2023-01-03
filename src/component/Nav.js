import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import rm from '../pic/RMA1.png'
function ColorSchemesExample() {
  return (
    <>
      <Navbar className='justify-content-end' bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home"><img src={rm} style={{width:"40%"}} ></img></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link  href="#got">Home</Nav.Link>
            <Nav.Link href="#platforms">Platforms</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>












        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default ColorSchemesExample;