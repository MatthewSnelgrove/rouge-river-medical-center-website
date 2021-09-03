import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import Image from 'react-bootstrap/Image';

const NavbarC = () => {
    return (
        <Navbar sticky='top' bg='light' expand='lg'>
            <Navbar.Brand href='/'>
                <Image src='./res/RRMCLogo.png'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='nav-fill w-100' variant='tabs'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='understanding-FHOs'>Understanding FHOs</Nav.Link>
                    <Nav.Link href='types-of-appointments'>Types of Appointments</Nav.Link>
                    <Nav.Link href='lab-contact-info'>Lab Contact Info</Nav.Link>
                    <Nav.Link href='after-hours'>After Hours</Nav.Link>
                    <Nav.Link href='resources'>Resources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarC;