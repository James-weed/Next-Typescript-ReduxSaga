import { useSelector } from "react-redux";
import { RootState } from "../../model/root_state";

export function usePeople() {
    return useSelector((state: RootState) => state.people)
}