import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    console.log('user in private route');
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='d-flex justify-content-center mt-2'><Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" /></div>
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;

};

export default PrivateRoute;