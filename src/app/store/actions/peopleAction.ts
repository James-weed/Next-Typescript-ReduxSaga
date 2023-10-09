import { People } from "@/app/model/people";

export enum ActionType {
    GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS',
    GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE',
    GET_PEOPLE_LOADING = 'GET_PEOPLE_LOADING',
    GET_PEOPLE_REQUEST = 'GET_PEOPLE_REQUEST',
}

export const getPeopleRequest = ()  => ({
    type: ActionType.GET_PEOPLE_REQUEST
})

export const getPeopleSuccess = (people: People[])  => ({
    type: ActionType.GET_PEOPLE_SUCCESS,
    payload: people
})

export const getPeopleFailure = (msg: string)  => ({
    type: ActionType.GET_PEOPLE_FAILURE,
    payload: msg
})

export const getPeopleLoading = (islodaing: boolean) => ({
    type: ActionType.GET_PEOPLE_LOADING,
    payload: islodaing
})
