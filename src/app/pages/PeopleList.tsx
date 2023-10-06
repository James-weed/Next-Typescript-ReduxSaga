'use client'
import React, { useEffect } from 'react'
import Card from '../component/Card'
import { People } from '../model/people'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { getPeopleRequest } from '../store/actions/peopleAction'
import { usePeople } from '../store/hooks/usePeople'

export default function PeopleList() {
    
  const dispatch = useDispatch();
  const people = usePeople();
  const handleClick = () => {
    dispatch(getPeopleRequest());
    }

  useEffect(() => {
    handleClick()
  }, [])

  return (<>
      <Head>
          <title>PeopleList</title>
          <meta property="og:title" content="PeopleList" key="title" />
      </Head>
      <div className='flex items-center justify-center mt-4'>
        <button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {handleClick()}}>
          {!people.loading ? 'loading...' :'Get People'}
        </button>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          {
            people.peoples.map((people: People) => (
            <Card data={people} key = {people.id} />
          ))}
        </div>
      </div>
    </>
  )
}