import React from 'react'
import classes from './ticket.module.scss'

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket

  return (
    <>
      <div className={classes.ticket}>
        {/* Блок с ценой и логотипом */}
        <div className={classes.price}>
          <div className={classes.cost}>{price.toLocaleString()} ₽</div>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>

        {/* Блоки с перелётами */}
        {segments.map((segment, index) => {
          const departureTime = new Date(segment.date)
          const arrivalTime = new Date(departureTime.getTime() + segment.duration * 60000)

          return (
            <div key={index} className={classes.info}>
              <div>
                <div className={classes.gray}>
                  {segment.origin} – {segment.destination}
                </div>
                <div>
                  {departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} -
                  {arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>

              <div>
                <div className={classes.gray}>В пути</div>
                <div>
                  {Math.floor(segment.duration / 60)}ч {segment.duration % 60}м
                </div>
              </div>

              <div>
                <div className={classes.gray}>
                  {segment.stops.length === 0 ? 'Прямой рейс' : `${segment.stops.length} пересадки`}
                </div>
                <div>{segment.stops.length ? segment.stops.join(', ') : '-'}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Ticket
