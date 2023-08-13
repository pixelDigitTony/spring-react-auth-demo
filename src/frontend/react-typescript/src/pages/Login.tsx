import React, { useState } from 'react';
import {Button, TextField} from "@mui/material";
import {SendOutlined} from "@mui/icons-material";
import './css/Login.css';
import API from "../lib/Api.tsx"; // Import the CSS file

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // You can add login logic here, such as sending a request to a server for authentication.
        // For this example, let's just log the entered credentials to the console.
        try {
            const response = await API.post('/user/login/auth', {
                "username" : username,
                "password" : password,
            });
            // Handle the response, such as showing a success message or navigating to another page
            console.log('Login Successful:', response.data);
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Login Failed:', error);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        color="primary"
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        color="primary"
                        variant="outlined"
                        onChange={handlePasswordChange}
                    />
                </div>
                <Button variant="contained" type="submit" endIcon={<SendOutlined />}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Login;