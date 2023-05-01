import React, { useContext, useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegisterBtn = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const first = form.firstName.value
        const last = form.lastName.value
        const name = first + ' ' + last
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        console.log(name, email, password, confirmPassword)

        if(password !== confirmPassword){
            setError("confirm password didn't match")
            return
        }

        if(password.length < 6){
            setError("password must be greater than 6")
            return
        }

        createUser(email, password)
        .then(result => {
            const currentUser = result.user
            updateProfile(currentUser, {displayName: name})
            .then(navigate('/home'))
            .catch(error => setError(error.code))
        })
        .catch(error => setError(error.code))

    }
    return (
        <Container className='mx-auto login-box'>
            <Form onSubmit={handleRegisterBtn}>
                <h5 className='fw-semibold mb-3'>Create an account</h5>
                <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" name='firstName' required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" name='lastName' required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Username or Email" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name='email' required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" name='confirmPassword' required />
                </FloatingLabel>

                <Button className='mb-2 w-100' variant="warning" type="submit">
                    Create an account
                </Button>
                <br />
                <Form.Text className="d-flex justify-content-center fw-semibold text-dark">
                    Alreday have an account? <Link className='ps-2 text-warning' to='/login'>Login</Link><br />
                </Form.Text>
                <Form.Text className="text-muted text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger d-flex justify-content-center mt-2">
                    {error}
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;