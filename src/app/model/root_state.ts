import { People } from "./people";

export interface PeopleState {
    peoples: People[];
    loading: boolean,
    error: string
}

export interface RootState {
    people: PeopleState;
}