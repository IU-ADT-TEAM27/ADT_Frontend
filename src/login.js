/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import {useAuth} from './authContext';
import { useNavigate } from 'react-router-dom';
// import { red } from '@mui/material/colors';

function Signup() {
    const { setAuthToken} = useAuth();
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errorMessages, setErrorMessages] = useState({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [invalid,setInvalid] = useState(false);

    const showSignup = () => setIsSignup(true);
    const showSignin = () => setIsSignup(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Basic form validation
        const errors = {};

        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        if (isSignup) {
            if (!formData.firstName) {
                errors.firstName = 'First Name is required';
            }
            if (!formData.confirmPassword) {
                errors.confirmPassword = 'Confirm Password is required';
            } else if (formData.password !== formData.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match';
            }
        }

        if (Object.keys(errors).length === 0) {
            // Form is valid, you can proceed with the API call
            const apiUrl = isSignup ? 'https://adtteam27.onrender.com/api/register' : 'https://adtteam27.onrender.com/api/auth/login';
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };

            fetch(apiUrl, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    // Handle API response data
                    if(data.success){
                        setAuthToken(data.token)
                        localStorage.setItem('token',data.token)
                        navigate('/products')
                    }else{
                        setInvalid(true)
                    }
                    

                })
                .catch((error) => {
                    console.error('API Error:', error);
                });
        } else {
            setErrorMessages(errors);
        }
    };

    return (
        <Grid container sx={{ width: '100vw', height: '100vh', margin: 'auto', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} lg={6} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: 3, borderRadius: '10px' }}>
                <Button onClick={showSignup} variant={isSignup ? 'contained' : 'outlined'} sx={{ width: '50%', my: 2 }}>
                    Sign Up
                </Button>
                <Button onClick={showSignin} variant={!isSignup ? 'contained' : 'outlined'} sx={{ width: '50%', my: 2 }}>
                    Sign In
                </Button>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ height: '100%', padding: '2% 3%', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 3, borderRadius: '10px' }}>
                <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Typography>
                {isSignup ? (
                    <>
                        <TextField label="First Name" type="text" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} sx={{ width: '100%', mb: 2 }} error={!!errorMessages.firstName} helperText={errorMessages.firstName} />
                        <TextField label="Last Name" type="text" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} sx={{ width: '100%', mb: 2 }} />
                        <TextField label="Email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} sx={{ width: '100%', mb: 2 }} error={!!errorMessages.email} helperText={errorMessages.email} />
                        <TextField label="Password" type="password" name="password" autoComplete="new-password" value={formData.password} onChange={handleChange} sx={{ width: '100%', mb: 2 }} error={!!errorMessages.password} helperText={errorMessages.password} />
                        <TextField label="Confirm Password" type="password" name="confirmPassword" autoComplete="new-password" value={formData.confirmPassword} onChange={handleChange} sx={{ width: '100%', mb: 2 }} error={!!errorMessages.confirmPassword} helperText={errorMessages.confirmPassword} />
                    </>
                ) : (
                    <>
                        {invalid ? (<p sx={{color : "red", margin : "2 2"}}>Invalid username or password</p>) : (<></>)}
                        <TextField label="Email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} sx={{ width: '100%', mb: 2 }} error={!!errorMessages.email} helperText={errorMessages.email} />
                        <TextField label="Password" type="password" name="password" autoComplete="current-password" value={formData.password} onChange={handleChange} sx={{ width: '100%', mb: 2 }} error={!!errorMessages.password} helperText={errorMessages.password} />
                    </>
                )}
                <Button size="large" variant='contained' sx={{ width: '100%' }} onClick={handleSubmit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
            </Grid>
        </Grid>
    );
}

export default Signup;
