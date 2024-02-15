import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex gap-6 w-full'>
          <img src="./system-uicons_filtering.svg" alt="" />
          <input type="text" placeholder='Start typing to search for user' className='flex-1' />
    </div>
  )
}

export default Searchbar
