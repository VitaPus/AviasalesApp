import React, { useEffect } from 'react'
import Headerlogo from '../Headerlogo'
import Filter from '../Filter'
import { fetchId, fetchTickets } from '../reducer'
import classes from './app.module.scss'
import Ticket from '../Ticket/ticket'
import Tabs from '../Tabs/tabs'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const { searchId } = useSelector((state) => state.filters)

  useEffect(() => {
    dispatch(fetchId())
  }, [dispatch])

  useEffect(() => {
    if (searchId !== null) {
      dispatch(fetchTickets())
    }
  }, [dispatch, searchId])

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
