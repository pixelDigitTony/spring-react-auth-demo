import {useEffect, useState} from 'react';
import {Button, Modal} from "@mui/material";
import {AppRegistration, DeleteForeverOutlined, Logout} from "@mui/icons-material";
import './css/Login.css';
import useModal from "../hooks/useModal.tsx";
import Form from "../components/Form.tsx";
import LoginApi from "../lib/LoginApi.tsx";

interface LoginCred {
    id: string;
    username: string;
    password: string;
}

interface RegisterCred {
    username: string;
    password: string;
}

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<LoginCred>({id: '', username: '', password: ''});
    const {isOpen, isVisible, isClosed} = useModal();

    const handleLogin = async (formData: any) => {
        try {
            const response = await LoginApi.login(formData);
            // Handle the response, such as showing a success message or navigating to another page
            console.log('Login Successful:', response);
            setUser(response);
            sessionStorage.setItem('user', JSON.stringify(response));
            setIsLoggedIn(true);
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Login Failed:', error);
        }
    };

    const handleRegister = async (formData: RegisterCred) => {
        try {
            const userReg = {
                "username": formData.username,
                "password": formData.password,
            }
            const response = await LoginApi.register(userReg);
            // Handle the response, such as showing a success message or navigating to another page
            console.log('Login Successful:', response);
            setUser(response);
            sessionStorage.setItem('user', JSON.stringify(response));
            setIsLoggedIn(true);
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Login Failed:', error);
        }
    }

    const handleLogout = async () => {
        try {
            const response = await LoginApi.logout();
            alert(response)
            sessionStorage.removeItem('user');
            setIsLoggedIn(false);
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Logout Failed:', error);
        }
    }

    const handleDeleteUser = async () => {
        try {
            const response = await LoginApi.deleteUser(user.id);
            alert(response)
            sessionStorage.removeItem('user');
            setIsLoggedIn(false);
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Delete Failed:', error);
        }
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
                <div className={"button-container"}>
                    <Button className={"logout"} variant={"contained"} onClick={handleLogout} endIcon={<Logout/>}>
                        Logout
                    </Button>
                    <Button className={"deleteUserButton"} variant={"contained"} onClick={handleDeleteUser} endIcon={<DeleteForeverOutlined />}>
                        Delete Account
                    </Button>

                </div>

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