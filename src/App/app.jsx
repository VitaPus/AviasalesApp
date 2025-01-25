import React from 'react'
import Headerlogo from '../Headerlogo'
import Filter from '../Filter'

import './app.scss'
import Ticket from '../Ticket/ticket'
import Tabs from '../Tabs/tabs'

const App = () => {
  return (
    <>
      <Headerlogo />
      <div className="app">
        <Filter />
        <div>
          <Tabs />
          <Ticket />
        </div>
      </div>
    </>
  )
}

export default App
