'use client'
import React, { useState, useEffect } from 'react'
import Card from '../component/Card'
import { People } from '../model/people'
import { getPeople } from '@/api/people'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { getPeopleAction } from '../actions/peopleAction'
import { usePeople } from '../hooks/usePeople'

export default function PeopleList() {
    
  const dispatch = useDispatch();
  const peoples = usePeople();
  console.log(peoples)
  const handleClick = () => {
    dispatch(getPeopleAction() as any);
      // getPeople().then((res) => dispatch(getPeopleAction(res as unknown as People)));
    }

  useEffect(() => {
    handleClick()
  },[])

  return (
      <>
          <Head>
              <title>PeopleList</title>
              <meta property="og:title" content="PeopleList" key="title" />
        </Head>
      <div className='flex items-center justify-center mt-4'>
        <button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {handleClick()}}>
          Get People
        </button>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          {!peoples.loading ? 'loading...' :
            peoples.peoples.map((people: People) => (
            <Card data={people} key = {people.id} />
          ))}
        </div>
      </div>
    </>
  )
}