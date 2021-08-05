import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../Components/Quiz';
import Success from '../Components/Success'

const MainStackNavigator = () => {
    const MainStack = createStackNavigator();
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Quiz" component={Quiz}/>
            <MainStack.Screen name="Success" component={Success}/>
        </MainStack.Navigator>
    )
}

export default MainStackNavigator
