import {useEffect, useState} from 'react';
import {Button, Modal} from "@mui/material";
import {AppRegistration, DeleteForeverOutlined, Logout} from "@mui/icons-material";
import './css/Login.css';
import API from "../lib/Api.tsx";
import useModal from "../hooks/useModal.tsx";
import Form from "../components/Form.tsx";

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

    const handleRegister = async (formData: RegisterCred) => {
        try {
            const user = {
                "username": formData.username,
                "password": formData.password,
            }
            const response = await API.post('/user/register', user).then(() => {
                return API.post('/user/login/auth', {
                    "username": user.username,
                    "password": user.password,
                });
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
    }

    const handleLogout = async () => {
        try {
            const response = await API.get('/user/logout');
            alert(response.data)
            sessionStorage.removeItem('user');
            setIsLoggedIn(false);
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Logout Failed:', error);
        }
    }

    const handleDeleteUser = async () => {
        try {
            const response = await API.delete('/user/delete/'+ user.id);
            alert(response.data)
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