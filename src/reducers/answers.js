import { SHOW_NUMBER_OF_ANSWERS } from '../actions/answers';

const reducer = (state = 0, action = {}) => {
    switch (action.type) {
        case SHOW_NUMBER_OF_ANSWERS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;