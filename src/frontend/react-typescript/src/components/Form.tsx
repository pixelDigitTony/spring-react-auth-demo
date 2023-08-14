import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {SendOutlined} from "@mui/icons-material";
import './css/Form.css';

interface Form {
    title: string;
    buttonSubmitLabel: string;
    onSubmit: (formData: FormValues) => void;
    children?: React.ReactNode;
}

interface FormValues {
    username: string;
    password: string;
}

const Form: React.FC<Form> = ({title, onSubmit, buttonSubmitLabel, children}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({username, password});
    };

    return (
        <div className="form-container">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        color="primary"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        color="primary"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <Button
                        variant="outlined"
                        className="submit"
                        type="submit"
                        endIcon={<SendOutlined/>}
                    >
                        {buttonSubmitLabel}
                    </Button>
                </div>
                <div className="form-group">
                    {children}
                </div>
            </form>
        </div>
    );
};

export default Form;