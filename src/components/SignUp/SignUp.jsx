import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAuthContext } from '../../context/authContext';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp, user } = useAuthContext()
    console.log(email, password)

    function handleRegister(email, password) {
        signUp({ email, password })
    }


    return (
        <div>
            sign Up
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
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

            </Box>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => handleRegister(email, password)}>Sign Up</Button>
                <Button variant="outlined">Sign In</Button>
            </Stack>
        </div>
    );
};

export default SignUp;