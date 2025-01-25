import React from 'react'
import classes from './ticket.module.scss'

const Ticket = () => {
  return (
    <>
    <div className={classes.ticket}>
      <div className={classes.price}>
        <div className={classes.cost}>13370 Р</div>
        <img src="//pics.avs.io/99/36/UT.png" alt="img"></img>
      </div>
      <div className={classes.info}>
        <div className={classes.gray}>MOW - HKT</div>
        <div className={classes.gray}>В пути</div>
        <div className={classes.gray}>0 пересадок</div>
        <div>19:47-10:24</div>
        <div>14ч 37м</div>
        <div></div>
      </div>
      <div className={classes.info}>
        <div className={classes.gray}>MOW - HKT</div>
        <div className={classes.gray}>В пути</div>
        <div className={classes.gray}>0 пересадок</div>
        <div>19:47-10:24</div>
        <div>14ч 37м</div>
        <div></div>
      </div>
    </div>
    <button className={classes.moreticket}>5 билетов</button>
    </>
  )
}
export default Ticket
