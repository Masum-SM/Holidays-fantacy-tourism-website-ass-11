import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='logo'><img className='header-logo' src="https://i.ibb.co/y0vcGkb/logo.png" alt="" /> Holidays <span>Fantacy</span> Travel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto ">
                            <Nav.Link as={HashLink} to="/home#home" className='nav-anchor'>Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services" className='nav-anchor'>Services</Nav.Link>

                            <Nav.Link as={HashLink} to="/galery" className='nav-anchor'>Photo Gallery</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className='nav-anchor'>Contact Us</Nav.Link>

                            <NavDropdown title={<i className="fas fa-user"></i>} id="navbarScrollingDropdown">
                                <div className='drop-body'>
                                    <NavDropdown.Item as={HashLink} to="/order" className='nav-anchor drop-item'>My Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={HashLink} to="/manageorder" className='nav-anchor drop-item'>Manage All Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={HashLink} to="/addService" className='nav-anchor drop-item'>Add A New Service</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='dropsdown'>

                                        {
                                            user?.email ?
                                                <Nav.Link as={Link} to="/login"> <button className='log-icon' onClick={logOut}><i className="fas fa-external-link-square-alt"></i> Log Out
                                                </button><br />  <Navbar.Text className='signed-user text-warning'>
                                                        User:{user?.displayName}
                                                    </Navbar.Text> </Nav.Link>
                                                :
                                                <Nav.Link as={HashLink} className='log-icon' to="/login"><i className="fas fa-sign-in-alt"> Login</i></Nav.Link>

                                        }


                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;