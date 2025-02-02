import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Ticket from '../Ticket/ticket'
import classes from './ticketlist.module.scss'

const TicketList = () => {
  const { tickets, loading, error } = useSelector((state) => state.filters)
  const [visibleCount, setVisibleCount] = useState(5)

  if (loading && !tickets.length) return <p className={classes.loading}>loading tickets</p>
  if (error) return <p className={classes.error}>Error: {error}</p>
  if (!tickets.length) return <p className={classes.noTickets}>Tickets not found</p>

  return (
    <div className={classes.ticketList}>
      {tickets.slice(0, visibleCount).map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
      {visibleCount < tickets.length && (
        <button className={classes.moreticket} onClick={() => setVisibleCount(visibleCount + 5)}>
          5 билетов
        </button>
      )}
    </div>
  )
}
export default TicketList
