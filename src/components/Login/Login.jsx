import React, { useContext, useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { loginUser, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const from = location.state?.from?.pathname || "/home";

    const handleLoginBtn = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
        .then(() => navigate(from))
        .catch(error => setError(error.code))
    }
    return (
        <Container className='mx-auto login-box'>
            {!user ? <Form onSubmit={handleLoginBtn}>
                <h5 className='fw-semibold mb-3'>Login</h5>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username or Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" name='email' />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </FloatingLabel>

                <div className='d-flex justify-content-between align-items-center'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='fw-semibold' type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicForgotPassword">
                        <Link className='text-warning fw-semibold'>Forgot password?</Link>
                    </Form.Group>

                </div>

                <Button className='mb-2 w-100' variant="warning" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="d-flex justify-content-center fw-semibold text-dark">
                    Don't have an account? <Link className='ps-2 text-warning' to='/register'>Create an account</Link><br />
                </Form.Text>
                <Form.Text className="text-muted text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-muted text-danger">
                    {error}
                </Form.Text>
            </Form> : <div>Your are alreday logged in with : <span className='text-primary'>{user.email}</span></div> }

        </Container>
    );
};

export default Login;