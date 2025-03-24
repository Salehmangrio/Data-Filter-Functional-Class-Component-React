import React from 'react'
import TableData from './TableData'

import TableDataClass from './TableDataClass'

const App = () => {
  return (
    <>
      <h1 className='text-xl font-bold text-center my-4'>Table Data Filter using Functional Component</h1>
      <TableData />
      <hr className='border-4 my-4' />
      <h1 className='font-bold text-xl text-center my-4'>Table Data Filter using Class Component</h1>
      <TableDataClass />
    </>
  )
}

export default App