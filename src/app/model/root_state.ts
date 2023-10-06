import { People } from "./people";

export interface PeopleState {
    peoples: People[];
    loading: boolean
}

export interface RootState {
    people: PeopleState;
}