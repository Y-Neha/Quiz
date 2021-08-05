import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import SignupStackNavigator from './SignupStackNavigator';

import AuthContext from '../Context/AuthContext'

const AppNavigator = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const getNaviagator = () => {
        return (isAuthorized ? <MainStackNavigator /> : <SignupStackNavigator />)
    }
    return (
        <AuthContext.Provider value={{ isRegistered: false, setRegisterStatus: (isRegistered) => setIsAuthorized(isRegistered) }}>
            <NavigationContainer>
                {getNaviagator()}
                {/* <MainStackNavigator /> */}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default AppNavigator
