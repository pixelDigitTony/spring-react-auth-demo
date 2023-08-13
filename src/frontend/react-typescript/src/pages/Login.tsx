import React, {useEffect, useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Logout, SendOutlined} from "@mui/icons-material";
import './css/Login.css';
import API from "../lib/Api.tsx"; // Import the CSS file

interface LoginCred {
    username: string;
    password: string;
}

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loggedInUserRef = useRef<HTMLDivElement>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<LoginCred>({username: '', password: ''});

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await API.post('/user/login/auth', {
                "username" : username,
                "password" : password,
            });
            // Handle the response, such as showing a success message or navigating to another page
            console.log('Login Successful:', response.data);
            setUser(response.data);
            sessionStorage.setItem('user', JSON.stringify(response.data));
            setIsLoggedIn(true);
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Login Failed:', error);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
            setIsLoggedIn(true);
        }
    });

    return (
        isLoggedIn ? (
                <div ref={loggedInUserRef}>
                    <h1>Welcome {user.username}</h1>
                    <Button variant="contained" onClick={handleLogout} endIcon={<Logout />}>
                        Logout
                    </Button>
                </div>
            ) : (
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
                    <Button variant="outlined" type="submit" endIcon={<SendOutlined />}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    );
};

export default Login;