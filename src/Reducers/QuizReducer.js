const initialState = {
    answerSelected: '',
}

const SAVE_ANSWER_FOR_QUESTION = 'SAVE_ANSWER_FOR_QUESTION';

const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ANSWER_FOR_QUESTION:
            return { ...state, answerSelected: action.payload };
        default:
            return state;
    }
}

export default QuizReducer
