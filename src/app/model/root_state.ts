import { People } from "./people";

export interface PeopleState<T = unknown> {
    peoples: People[];
    loading: boolean,
    error: string
}

export interface RootState {
    people: PeopleState;
}