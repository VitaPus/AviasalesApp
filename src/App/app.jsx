import React from 'react'
import Headerlogo from '../Headerlogo'
import Filter from '../Filter'

import classes from './app.module.scss'
import Ticket from '../Ticket/ticket'
import Tabs from '../Tabs/tabs'

const App = () => {
  return (
    <>
      <Headerlogo />
      <div className={classes.app}>
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
