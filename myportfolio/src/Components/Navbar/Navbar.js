import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcon } from 'react-social-icons'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">Samy's Porfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
          <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.linkedin.com/in/samy-gadi-83b00317a/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />

                    <SocialIcon
                        url="https://github.com/samyg12"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />
                </div>
            
        </Navbar.Collapse>
      </Container>

    </Navbar>
    
  );
  
}

export default NavBar;