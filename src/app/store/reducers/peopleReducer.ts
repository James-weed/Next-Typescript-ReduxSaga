import { People } from '../../model/people';
import { PeopleState } from '../../model/root_state';

const initialState: PeopleState = {
    loading: false,
    peoples: []
}

const peopleReducer = (state = initialState, action: { type: string; payload: People }) => {
    switch (action.type) {
        case 'LOADING_PEOPLE':
            return {
                loading: false
            }
        case 'GET_PEOPLE':
            return {
                ...state,
                peoples: action.payload,
                loading: true
            };
        default:
            return state;
    }
}

export default peopleReducer;