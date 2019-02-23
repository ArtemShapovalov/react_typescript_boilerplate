import {AnyAction} from 'redux';
import * as ActionTypes from './constants';

export interface AppState {
    initialized: boolean
}

export const initialState = {
    initialized: false
};

export default function reducer(state: AppState = initialState, action: AnyAction): AppState {
    const { type } = action;

    switch (type) {
        case ActionTypes.APP_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
