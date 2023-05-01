import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Shared/NavBar/NavBar';

const LoginLayout = () => {
    return (
        <div>
            <NavBar>
                <div></div>
            </NavBar>
            <Outlet />
        </div>
    );
};

export default LoginLayout;