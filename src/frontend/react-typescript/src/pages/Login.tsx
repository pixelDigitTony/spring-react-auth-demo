import {useEffect, useState} from 'react';
import {Button, Modal} from "@mui/material";
import {AppRegistration, Logout} from "@mui/icons-material";
import './css/Login.css';
import API from "../lib/Api.tsx";
import useModal from "../hooks/useModal.tsx";
import Form from "../components/Form.tsx";

interface LoginCred {
    username: string;
    password: string;
}

interface RegisterCred {
    username: string;
    password: string;
}

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<LoginCred>({username: '', password: ''});
    const {isOpen, isVisible, isClosed} = useModal();

    const handleLogin = async (formData: LoginCred) => {
        try {
            const response = await API.post('/user/login/auth', {
                "username": formData.username,
                "password": formData.password,
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

    const handleRegister = (formData: RegisterCred) => {
        console.log('Register Successful:', formData.username, formData.password);
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
    }, []);

    return (
        isLoggedIn ? (
            <div>
                <h1>Welcome {user.username}</h1>
                <Button variant="contained" onClick={handleLogout} endIcon={<Logout/>}>
                    Logout
                </Button>
            </div>
        ) : (
            <>
                <Modal open={isOpen}
                       onClose={isClosed}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                       className={"modal"}
                       title={"Register"}
                >
                    <div>
                        <Form title={"Register"} buttonSubmitLabel={"Sign-up"} onSubmit={handleRegister}/>
                    </div>
                </Modal>
                <Form title={"Login"} buttonSubmitLabel={"Login"} onSubmit={handleLogin}>
                    <Button variant="outlined" className={"register"} onClick={isVisible}
                            endIcon={<AppRegistration/>}>
                        Sign-up
                    </Button>
                </Form>
            </>
        )
    );
};

export default Login;