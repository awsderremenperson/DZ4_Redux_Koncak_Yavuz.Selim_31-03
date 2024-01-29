// appReducer.js
const initialState = {
    userData: {
        name: '',
        age: '',
    },
    theme: 'light',
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload,
            };
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        default:
            return state;
    }
};

export default appReducer;
