import { useSelector } from "react-redux";

export function usePeople() {
    return useSelector((state: any) => state.peoples.peoples)
}