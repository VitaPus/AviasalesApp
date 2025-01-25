import React from 'react'
import './ticket.scss'

const Ticket = () => {
  return (
    <>
    <div className="ticket">
      <div className="price">
        <div className="cost">13370 Р</div>
        <img src="//pics.avs.io/99/36/UT.png" alt="img"></img>
      </div>
      <div className="info">
        <div className="gray">MOW - HKT</div>
        <div className="gray">В пути</div>
        <div className="gray">0 пересадок</div>
        <div>19:47-10:24</div>
        <div>14ч 37м</div>
        <div></div>
      </div>
      <div className="info">
        <div className="gray">MOW - HKT</div>
        <div className="gray">В пути</div>
        <div className="gray">0 пересадок</div>
        <div>19:47-10:24</div>
        <div>14ч 37м</div>
        <div></div>
      </div>
    </div>
    <button className="moreticket">5 билетов</button>
    </>
  )
}
export default Ticket
