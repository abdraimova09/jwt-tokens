import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

import { useAuthContext } from '../../context/authContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, checkAuth, logout, loading } = useAuthContext()
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            checkAuth()
        }
    }, [])
    return loading ? <h1>Loading</h1> : (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: "10vw" }}>
            {user ? <h2>User: {user} <Button variant="outlined" onClick={logout}>Logout</Button>
            </h2> : location.pathname == "/signup" ? <Button variant="outlined" onClick={() => navigate("/signin")}>Login</Button> : <Button variant="outlined" onClick={() => navigate("/signup")}>Register</Button>
            }
        </div>
    );
};

export default Header;