import React, { createContext, useContext, useEffect, useCallback } from 'react';
import { People, User } from '../model/people';
import { useFetchPeople } from './hooks/useFetchPeople';
import { Island_Moments } from 'next/font/google';

type UserContextType = {
  peoples: User[];
  isLoading: boolean;
  addPeoples: () => void;
  resetPeoples: () => void;
};

const UserContext = createContext<UserContextType>({ peoples: [], isLoading: false, addPeoples: () => {}, resetPeoples: () => {}});

export const UserProvider = ({children} : any) => {

    const { peoples, isLoading, addPeoples, resetPeoples} = useFetchPeople();
    const value = {peoples, isLoading, addPeoples, resetPeoples}
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsercontext = () => {
    return useContext(UserContext);
};