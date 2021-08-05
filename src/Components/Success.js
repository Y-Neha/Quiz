import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Success = (props) => {
    const { container, textStyle } = styles;
    const { route } = props;
    const { count } = route.params;
    return (
        <View style={container}>
            <Text style={textStyle}>Thank You, Your score is {count}!</Text>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20
    }
})
