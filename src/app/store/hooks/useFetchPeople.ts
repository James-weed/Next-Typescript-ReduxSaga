import React, { useState, useEffect, useCallback } from 'react'
import { User } from '@/app/model/people';
import useAsyncAction from './useAsyncAction';

export function useFetchPeople() {
    const [peoples, setPeoples]= useState<User[]>([])
    const [offset, setOffset] = useState(0)
    const [
        fetchUsers,
        isLoading,
        {
            data: users = [],
            error
        }
    ] = useAsyncAction(
        useCallback(async () => {
            const response = await fetch(`https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=10`);
            const data = await response.json()
            return data.users as User[]
        }, [offset])
    );

    useEffect(()=>{
        setPeoples((prevUsers: User[]) => [...prevUsers, ...users])
        setOffset(offset + 10)
    }, [users])

    const resetPeoples = useCallback(() => {setPeoples(users)}, [])

    return { peoples, isLoading, fetchUsers, resetPeoples }
}