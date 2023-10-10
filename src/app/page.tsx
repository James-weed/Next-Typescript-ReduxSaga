'use client'
import React from 'react'
import { Provider } from 'react-redux'
// import store from './store'
import PeopleList from './pages/PeopleList'
import { PeopleState } from './model/root_state'
import { UserProvider } from './store/context'

export default function Home() {
  return (
    <>
      <UserProvider>
        <PeopleList />
      </UserProvider>
    </>
  )
}
