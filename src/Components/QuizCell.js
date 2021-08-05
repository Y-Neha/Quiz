import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const QuizCell = (props) => {
    const { quiz, onPress } = props;
    const { question, answers, number } = quiz;
    const { containerStyle, answerCard, textStyle } = styles;
    const [selected, setSelected] = useState("");

    function onAnswerPicker(item, answerIndex, questionNo) {
        setSelected(item);
        onPress(item, answerIndex, questionNo)
    }
    function renderItem({ item, index }) {
        const style = selected == item ? { color: 'blue', fontWeight: 'bold' } : { color: 'black' }
        return (
            <TouchableOpacity style={answerCard} onPress={() => onAnswerPicker(item, index, number)}>
                <Text style={style}>{item}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{question}</Text>
            <FlatList
                data={answers}
                renderItem={renderItem}
            />
        </View>
    )
}

export default QuizCell;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 20,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 14,
    },
    answerCard: {
        backgroundColor: 'white',
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        height: 36,
    }
})
