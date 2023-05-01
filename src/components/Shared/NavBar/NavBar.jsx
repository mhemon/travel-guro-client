import React, { useContext } from 'react';
import logo from '../../../../public/logo.png'
import logoDark from '../../../../public/logo_dark.png'
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';

const NavBar = ({ children }) => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSearchQuery = (event) => {
        event.preventDefault()
        const search = event.target.search.value
        // <Navigate to="/dashboard", replace={true} />
        navigate(`/search/${search}`)
    }

    const handleLogoutBtn = () => {
        logout()
        .then(() => navigate('/home'))
        .catch(error => alert(error.code))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg={children ? 'white' : 'transparent'} variant={children ? 'light' : 'dark'}>
            <Container>
                <Navbar.Brand className='logo-img d-flex align-items-center'>
                    {children ? <Link to='/home'><img className='img-fluid' src={logoDark} alt="" /></Link> :
                        <Link to='/home'><img className='img-fluid' src={logo} alt="" /></Link>}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {children || <Nav className="me-auto w-100 px-lg-5">
                        <Form onSubmit={handleSearchQuery} className="d-flex w-100 py-3 py-lg-0">
                            <Form.Control
                                type="search"
                                placeholder="Search your Destination..."
                                className="me-2"
                                aria-label="Search"
                                name='search'
                            />
                        </Form>
                    </Nav>}
                    <Nav className={`d-flex align-items-center gap-lg-4 ${children && 'ms-auto'}`}>
                        <Nav.Link>
                            <Link className={`text-decoration-none fw-semibold ${children ? 'text-black' : 'text-white'}`} to='/'>News</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={`text-decoration-none fw-semibold ${children ? 'text-black' : 'text-white'}`} to='/'>Destination</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={`text-decoration-none fw-semibold ${children ? 'text-black' : 'text-white'}`} to='/'>Blog</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={`text-decoration-none fw-semibold ${children ? 'text-black' : 'text-white'}`} to='/'>Contact</Link>
                        </Nav.Link>
                        {children && user ? <span className='fw-semibold d-flex align-items-center'>{user?.displayName}
                            <Button onClick={handleLogoutBtn} className='ms-2' variant="outline-danger">Logout</Button>
                        </span> :
                            <Button className='pt-sm-2' variant='warning'><Link className='text-decoration-none text-black fw-semibold' to="/login">Login</Link></Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;