import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import QuizCell from './QuizCell';
import { connect } from 'react-redux';
import { saveAnswerForQuestion } from '../Actions/actions'


const DATA = [
    {
        "number": 1,
        "question": "How many elements react can return?",
        "answers": [
            "1",
            "0",
            "none"
        ],
        "correct_answer": 0
    },
    {
        "number": 2,
        "question": "what is React Native",
        "answers": [
            "Library",
            "Framework"
        ],
        "correct_answer": 1
    },
    {
        "number": 3,
        "question": "Who Develop React",
        "answers": [
            "Apple",
            "Facebook",
            "Google",
            "Twitter"
        ],
        "correct_answer": 1
    }
]
const Quiz = (props) => {
    const { containerStyle, buttonStyle } = styles;
    const [answers, setAnswers] = useState(DATA);

    const { navigation } = props;

    function onAnswerSelected(item, answerIndex, questionNo) {
        const answerList = answers.map(quiz => {
            if (quiz.number === questionNo) {
                return { ...quiz, "userSelect": answerIndex }
            }
            return { ...quiz }
        });
        setAnswers(answerList);
        //dispatch action 
        saveAnswerForQuestion(item)
    }

    function onSubmit() {
        const matchRecords = answers.filter(item => item.userSelect === item.correct_answer)
        navigation.navigate("Success", { count: matchRecords.length });
    }
    function renderItem({ item }) {
        return <QuizCell quiz={item} onPress={onAnswerSelected} />
    }
    return (
        <SafeAreaView style={containerStyle}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.number.toString()}
                renderItem={renderItem}
            />
            <TouchableOpacity style={buttonStyle} onPress={onSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

// export default Quiz

const mapStateToProps = (state) => {
    const { quizReducer } = state
    return { answerSelected: quizReducer.answerSelected }
};
const mapDispatchToProps = {
    saveAnswerForQuestion
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    textStyle: {
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: 'white',
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        height: 36,
        backgroundColor: '#7DE24E',
        marginHorizontal: 20,
    }
})
