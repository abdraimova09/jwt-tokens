import React, { useContext, useState } from 'react'
import axios from 'axios'

export const authContext = React.createContext()
export const useAuthContext = () => useContext(authContext)

const API = 'http://104.154.71.130/'

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('')

    const signUp = async (user) => {
        let formData = new FormData()
        formData.append('username', user.email)
        formData.append('password', user.password)
        try {
            const res = await axios.post(`${API}register/`, formData)
            setUser(user.email)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <authContext.Provider value={{ signUp, user }}>
            {children}
        </authContext.Provider>
    )
}
export default AuthContextProvider