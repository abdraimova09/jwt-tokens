import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAuthContext } from '../../context/authContext';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn, error } = useAuthContext()
    // console.log(email, password)

    function handleLogin(email, password) {
        signIn(email, password)
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", width: "30vw", margin: "20vh auto", textAlign: "center" }}>
            <h1>Login</h1>
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

            <Button variant="contained" onClick={() => handleLogin(email, password)}>Sign in</Button>
        </div>
    );
};

export default SignIn;