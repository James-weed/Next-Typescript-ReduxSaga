import React, { createContext, useContext, useEffect, useCallback, useState } from 'react';
import { User } from '../model/people';
import useSearchPeople from './hooks/useSearchPeople';

type UserContextType = {
  people: User[];
  loading: boolean;
  loadMore: () => void;
  setFilters: any
};

const UserContext = createContext<UserContextType>({ people: [], loading: false, loadMore: () => {}, setFilters: () => {}});

export const UserProvider = ({ children }: any) => {
    const [filters, setFilters] = useState('')
    const { people, loading, loadMore} = useSearchPeople(filters, 10);
    const value = {people, loading, loadMore, setFilters}
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsercontext = () => {
    return useContext(UserContext);
};