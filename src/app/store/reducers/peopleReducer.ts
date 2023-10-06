import { People } from '../../model/people';
import { PeopleState } from '../../model/root_state';
import { ActionType } from '../actions/peopleAction';

const initialState: PeopleState = {
    loading: false,
    peoples: [],
    error: ''
}

const peopleReducer = (state = initialState, action: { type: string; payload: People }) => {
    switch (action.type) {
        case ActionType.GET_PEOPLE_LOADING:
            return {
                ...state,
                loading: false
            }
        case ActionType.GET_PEOPLE_SUCCESS:
            return {
                ...state,
                peoples: action.payload,
                loading: true
            };
        case ActionType.GET_PEOPLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default peopleReducer;