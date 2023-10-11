'use client'
import React, { useCallback, useDeferredValue, useEffect, useState } from 'react'
import Card from '../component/Card'
import { useUsercontext } from '../store/context'

export default React.memo(function PeopleList() {

  const { people, loading, loadMore, filters, setFilters } = useUsercontext()

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
      <div className='flex items-center justify-center mt-4'>
        <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Search..." value={filters} onChange={(e) => { setFilters(e.target.value)}}/>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          {
            people.map((p) => (
              <Card data={p} key={p.id} />
            ))}
        </div>
      </div>
    </>
  )
});