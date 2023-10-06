import { People } from '../model/people';

const initialState = {
    peoples: []
}

const peopleReducer = (state = initialState, action: { type: string; payload: People }) => {
    switch (action.type) {
        case 'GET_PEOPLE':
            return {
                ...state,
                peoples: action.payload,
            };
        default:
            return state;
    }
}

export default peopleReducer;