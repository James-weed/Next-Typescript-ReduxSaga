import { call, put, takeLatest } from "redux-saga/effects";
import { getPeople } from "@/api/people";
import { ActionType, getPeopleLoading, getPeopleSuccess, getPeopleFailure } from "./actions/peopleAction";

function* getPeopleSaga(action: ActionType) {
    try {
        yield put(getPeopleLoading(false))
        const people = yield call(getPeople)
        yield put(getPeopleSuccess(people))
    } catch (err) {
        yield put(getPeopleFailure(err.message as string))
    }
}

function* mysaga() {
    yield takeLatest(ActionType.GET_PEOPLE_REQUEST, getPeopleSaga)
}

export default mysaga