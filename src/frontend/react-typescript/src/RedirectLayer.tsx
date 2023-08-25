import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";


const RedirectLayer = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/login', {replace: true});
    }, []);

    return (
        <>
            <Outlet />
        </>
        );
}

export default RedirectLayer;