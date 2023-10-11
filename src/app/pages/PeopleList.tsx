'use client'
import React, { useCallback, useDeferredValue, useEffect, useState } from 'react'
import Card from '../component/Card'
import Head from 'next/head'
import { useUsercontext } from '../store/context'

export default React.memo(function PeopleList() {

  const { people, loading, loadMore, filters, setFilters } = useUsercontext()

  const handleClick = () => {
    loadMore()
  }

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight-1) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    loadMore()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  return (
    <>
      <Head>
        <title>PeopleList</title>
        <meta property="og:title" content="PeopleList" key="title" />
      </Head>
      <div className='flex items-center justify-center mt-4'>
        <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter something..." value={filters} onChange={(e) => { setFilters(e.target.value)}}/>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-16 rounded" onClick={() => { handleClick() }}>
          {loading ? 'loading...' : 'Get People'}
        </button>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          {
            // error == undefined ? 
            people.map((p) => (
              <Card data={p} key={p.id} />
            ))}
        </div>
      </div>
    </>
  )
});