import { configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};

const store = configureStore({ reducer: counterReducer });

export default store;