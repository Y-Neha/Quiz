import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../Components/SignUpScreen';

const SignupStackNavigator = () => {
    const SignUpStack = createStackNavigator();
    return (
        <SignUpStack.Navigator>
            <SignUpStack.Screen name="Sign Up" component={SignUpScreen} />
        </SignUpStack.Navigator>
    )
}

export default SignupStackNavigator;
