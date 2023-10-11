import React, { createContext, useContext, useState } from 'react';
import { User } from '../model/people';
import useSearchPeople from './hooks/useSearchPeople';
import useDeferredValue from './hooks/useDeferredValue';

type UserContextType = {
  people: User[];
  loading: boolean;
  loadMore: () => void;
  filters: any;
  setFilters: any;
};

const UserContext = createContext<UserContextType>({ people: [], loading: false, loadMore: () => {}, filters: '', setFilters: () => {}});

export const UserProvider = ({ children }: any) => {
    const [filters, setFilters] = useState('')
    const defferedFilters = useDeferredValue(filters)

    const { people, loading, loadMore} = useSearchPeople(defferedFilters, 10);
    const value = {people, loading, loadMore, filters, setFilters}
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsercontext = () => {
    return useContext(UserContext);
};