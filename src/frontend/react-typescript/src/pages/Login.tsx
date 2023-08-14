import React, {useEffect, useState} from 'react';
import {Button, Modal, TextField} from "@mui/material";
import {AppRegistration, Logout, SendOutlined} from "@mui/icons-material";
import './css/Login.css';
import API from "../lib/Api.tsx";
import useModal from "../hooks/useModal.tsx";
import ModalPortal from "../components/ModalPortal.tsx"; // Import the CSS file

interface LoginCred {
    username: string;
    password: string;
}

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<LoginCred>({username: '', password: ''});
    const {isOpen, isVisible, isClosed } = useModal();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await API.post('/user/login/auth', {
                "username" : event.currentTarget.username.value,
                "password" : event.currentTarget.password.value,
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

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Register Successful:', event.currentTarget.username.value, event.currentTarget.password.value);
    }

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
                <div>
                    <h1>Welcome {user.username}</h1>
                    <Button variant="contained" onClick={handleLogout} endIcon={<Logout />}>
                        Logout
                    </Button>
                </div>
            ) : (
            <>
                <ModalPortal>
                    <Modal open={isOpen}
                            onClose={isClosed}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                    >
                        <div className={"register-container"}>
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <TextField
                                        id="username"
                                        label="Username"
                                        variant="outlined"
                                        color="primary"
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        id="password"
                                        type="password"
                                        label="Password"
                                        color="primary"
                                        variant="outlined"
                                    />
                                </div>
                                <div className="form-group">
                                    <Button variant="outlined" className={"submit"} type="submit" endIcon={<SendOutlined />}>
                                        Sign-up
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </ModalPortal>
                <div className="login-container">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                color="primary"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                id="password"
                                type="password"
                                label="Password"
                                color="primary"
                                variant="outlined"
                            />
                        </div>
                        <div className="form-group">
                        <Button variant="outlined" className={"submit"} type="submit" endIcon={<SendOutlined />}>
                            Login
                        </Button>
                        </div>
                        <Button variant="outlined" className={"register"} onClick={isVisible} endIcon={<AppRegistration />}>
                            Sign-up
                        </Button>
                    </form>
                </div>
            </>
        )
    );
};

export default Login;