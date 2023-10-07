'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import PeopleList from './pages/PeopleList'

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <PeopleList />
      </Provider>
    </>
  )
}
