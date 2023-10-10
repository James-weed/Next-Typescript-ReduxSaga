import React, { useState, useEffect, useCallback } from 'react'
import { User } from '@/app/model/people';
import useAsyncAction from './useAsyncAction';
import { getPeople } from '@/api/people';

export function useFetchPeople() {
    const [peoples, setPeoples]= useState<User[]>([]);

    const [
        fetchUsers,
        isLoading,
        {
            data: users = [],
            error
        }
    ] = useAsyncAction(
        useCallback(async () => {
            const response = await fetch("https://api.slingacademy.com/v1/sample-data/users?offset=10&limit=20");
            const data = await response.json()
            console.log(data)
            return data.users as User[]
        }, [])
    );

    useEffect(()=>{
        setPeoples((prevUsers: User[]) => [...prevUsers, ...users])
    }, [users])

    const addPeoples = useCallback(() => {fetchUsers()}, [])
    const resetPeoples = useCallback(() => {setPeoples(users)}, [])

    return { peoples, isLoading, addPeoples, resetPeoples }
}