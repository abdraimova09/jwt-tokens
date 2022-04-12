import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp, error } = useAuthContext()
    console.log(email, password)

    function handleRegister(email, password) {
        signUp({ email, password }, navigate)
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", width: "30vw", margin: "20vh auto", textAlign: "center" }}>
            <h1>Register</h1>
            {error ? <h2>{error}</h2> : null}
            <TextField id="outlined-basic"
                label="email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            <TextField id="outlined-basic"
                label="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />

            <Button variant="contained" onClick={() => handleRegister(email, password)}>Sign Up</Button>
        </div>
    );
};

export default SignUp;