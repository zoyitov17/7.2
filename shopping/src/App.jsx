import React from 'react'
import './App.css'
import Filter from './components/filter/Filter'
import Carts from './components/carts/Carts'

const App = () => {
  return (
    <div className='flex'>
      <div className='w-[20%] h-[150vh] border'>
        <Filter/>
      </div>
      <div className='w-[80%] h-[150vh] border'>
        <Carts/>
      </div>
    </div>
  )
}

export default App