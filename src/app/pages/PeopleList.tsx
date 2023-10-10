'use client'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
import Head from 'next/head'
// import { useDispatch } from 'react-redux'
// import { getPeopleRequest } from '../store/actions/peopleAction'
// import { usePeople } from '../store/hooks/usePeople'
// import { People } from '../model/people'
import { useUsercontext } from '../store/context'

export default function PeopleList() {

  // const dispatch = useDispatch();
  // const people = usePeople();
  // console.log(people)

  const {peoples, isLoading, addPeoples, resetPeoples } = useUsercontext()

  const handleClick = () => {
    // dispatch(getPeopleRequest());
    // fetchUsers()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    resetPeoples()
  }

   const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight == scrollHeight) {
      addPeoples();
    }
  };
  
  // const handleScroll = () => {
  //   if ( window.innerHeight + window.scrollY == document.documentElement.scrollHeight ) {
  //     addPeoples()
  //   }
  // };

  useEffect(() => {
    addPeoples()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (<>
      <Head>
          <title>PeopleList</title>
          <meta property="og:title" content="PeopleList" key="title" />
      </Head>
      <div className='flex items-center justify-center mt-4'>
        <button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {handleClick()}}>
          {isLoading ? 'loading...' :'Get People'}
        </button>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
        {
          // error == undefined ? 
            peoples.map((people) => (
                <Card data={people} key={people.id} />
          )) }
        </div>
      </div>
    </>
  )
}