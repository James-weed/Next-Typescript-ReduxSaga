import { Peoples, User } from '@/app/model/people'
import { useRef, useCallback, useEffect, useReducer, useState } from 'react'
import useAsyncAction from './useAsyncAction'
import isEqual from 'lodash/isEqual'
import { getPeople } from '@/api/people'

type State = {
  people: User[]
  total: number
  page: number
}

enum SearchPeopleActionType {
  DataLoaded = 'DATA_LOADED',
  Reset = 'RESET'
}

type Action = {
  type: SearchPeopleActionType
  people?: User[]
  total?: number
  page?: number
}

const initialState: State = {
  people: [],
  total: 0,
  page: 0
}

interface SearchPeopleReturn {
    people: User[];
    total: number
}

function reducer(state: State, action: Action): State {
  switch(action.type) {
    case SearchPeopleActionType.DataLoaded:
      const newData = action.people?.reduce(
        (acc, curr) => {
          if (!state.people?.find((i) => (i.first_name + i.last_name) === (curr.first_name + curr.last_name))) {
            acc.push(curr)
          }

          return acc
        },
        [...(state.people ?? [])]
      ) ?? []

      return {
        people: newData,
        total: action.total ? action.total : state.total,
        page: action.page && action.page > state.page ? action.page : state.page
      }
    case SearchPeopleActionType.Reset:
      return {
        ...initialState
      }
    default:
      throw new Error('Un-Implemented action type')
  }
}

type SearchPeopleParam = [filters: any, page: number]

export default function useSearchPeople(
  filters: any,
  pageSize = 10
) {
  const filterRef = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  const [fetch, loading] = useAsyncAction<
    Peoples,
    SearchPeopleParam
  >(
    useCallback(async (filters: any, page) => {
        const data = await getPeople(filters, pageSize, page)
        return data
      }, [pageSize]),

    useCallback(
      (res: Peoples, [, page]: SearchPeopleParam) => {
        dispatch({
          type: SearchPeopleActionType.DataLoaded,
          people: res.users,
          total: res.total_users,
          page
        })
      },
      []
    )
  )

    useEffect(() => {
      console.log(filters)
    if (!isEqual(filterRef.current, filters)) {
      if (!isEqual(state, initialState)) {
        dispatch({
          type: SearchPeopleActionType.Reset
        })
      }
      fetch(filters, 0)
      filterRef.current = filters;
    }
  }, [fetch, filters, state])

  const loadMore = useCallback(() => {
    fetch(filters, state.page + 1)
  }, [fetch, filters, state.page])

  return {
    people: state.people,
    loading,
    loadMore
  }
}