import { Dispatch } from "redux";
import { getPeople } from "@/api/people";

export const getPeopleAction = () => async(dispatch: Dispatch)  => {
    dispatch(setloadingPeople());
    const res = await getPeople();
    dispatch({
        type: "GET_PEOPLE",
        payload: res
    })
}

const setloadingPeople = () => ({
    type: "LOADING_PEOPLE",
    payload: false
})