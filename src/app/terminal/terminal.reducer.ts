import { ActionReducer, Action } from '@ngrx/store';
import { SUBMIT_INPUT } from './terminal.actions';

export interface TerminalState {
    inputs: Array<string>;
}

export const INITIAL_TERMINAL_STATE: TerminalState = {
    inputs: []
};

export const mainStoreReducer: ActionReducer<TerminalState> =
    (state = INITIAL_TERMINAL_STATE, action: Action) => {
        console.log('Action came in! ' + action.type);
        switch (action.type) {
            case SUBMIT_INPUT: {
                console.log('Increment action being handled!');
                return {
                    inputs: [...state.inputs]
                };
            }
            default: {
                return state;
            }
        }
    };