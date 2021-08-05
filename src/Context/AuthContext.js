import {createContext} from 'react'

const AuthContext = createContext({
    isRegistered: false,
    setRegisterStatus: (status) => {return status}
})

export default AuthContext;
