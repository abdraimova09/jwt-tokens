import React, { useContext, useState } from 'react'
import axios from 'axios'

export const authContext = React.createContext()
export const useAuthContext = () => useContext(authContext)

const API = 'http://104.154.71.130/'

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [error, setError] = useState("")
    const signUp = async (user, navigate) => {
        let formData = new FormData()
        formData.append('username', user.email)
        formData.append('password', user.password)
        try {
            const res = await axios.post(`${API}register/`, formData)
            console.log(res);
            navigate("/signin")
            // setUser(user.email)
        } catch (e) {
            console.log(e)
            setError("Error!")
        }
    }
    async function signIn(username, password) {
        console.log(username, password);
        let formData = new FormData()
        formData.append("username", username)
        formData.append("password", password)
        try {
            let res = await axios.post(`${API}api/token/`, formData)
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data))
            localStorage.setItem("username", username)
            setUser(username)
        } catch (e) {
            setError("Error!")
        }
    }
    async function checkAuth() {
        let username = localStorage.getItem("username");
        setUser(username)
        let token = JSON.parse(localStorage.getItem("token"))
        try {
            const Authorization = `Bearer ${token.access}`;
            let res = await axios.post(`${API}api/token/refresh/`, { refresh: token.refresh }, { headers: { Authorization } })
            console.log(res);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <authContext.Provider value={{ signUp, signIn, user, error, checkAuth }}>
            {children}
        </authContext.Provider>
    )
}
export default AuthContextProvider