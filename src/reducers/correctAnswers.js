import { CHECK_NUMBER_OF_CORRECT_ANSWERS } from '../actions/checkNumberOfAnswers';

const reducer = (state = 0, action = {}) => {
    switch (action.type) {
        case CHECK_NUMBER_OF_CORRECT_ANSWERS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;