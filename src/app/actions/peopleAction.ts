import { People } from "../model/people";

export const getPeopleAction = (data: People) => ({
    type: 'GET_PEOPLE',
    payload: data,
})