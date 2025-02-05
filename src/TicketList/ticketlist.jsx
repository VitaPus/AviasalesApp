import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import Ticket from '../Ticket/ticket'
import Spinn from '../Spin'
import AlertMessage from '../Alert'
import classes from './ticketlist.module.scss'

const TicketList = () => {
  const { tickets, loading, error, sortType, ...filters } = useSelector((state) => state.filters)
  const [visibleCount, setVisibleCount] = useState(5)

  // ✅ Фильтрация билетов (useMemo для оптимизации)
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      if (!filters.all) {
        return (
          (filters.direct && ticket.segments.every((seg) => seg.stops.length === 0)) ||
          (filters.oneStop && ticket.segments.some((seg) => seg.stops.length === 1)) ||
          (filters.twoStops && ticket.segments.some((seg) => seg.stops.length === 2)) ||
          (filters.threeStops && ticket.segments.some((seg) => seg.stops.length === 3))
        )
      }
      return true
    })
  }, [tickets, filters])

  // ✅ Сортировка билетов (useMemo для оптимизации)
  const sortedTickets = useMemo(() => {
    return [...filteredTickets].sort((a, b) => {
      if (sortType === 'cheapest') return a.price - b.price
      if (sortType === 'fastest') {
        const aDuration = a.segments.reduce((sum, seg) => sum + seg.duration, 0)
        const bDuration = b.segments.reduce((sum, seg) => sum + seg.duration, 0)
        return aDuration - bDuration
      }
      if (sortType === 'optimal') {
        const aScore = a.price * 0.5 + a.segments.reduce((sum, seg) => sum + seg.duration, 0) * 0.5
        const bScore = b.price * 0.5 + b.segments.reduce((sum, seg) => sum + seg.duration, 0) * 0.5
        return aScore - bScore
      }
      return 0
    })
  }, [filteredTickets, sortType])

  return (
    <div className={classes.ticketList}>
      {/* ✅ Исправленный вывод ошибки */}
      {error && (
        <p className={classes.error}>
          <AlertMessage />
        </p>
      )}

      {/* ✅ Показываем билеты и спиннер одновременно */}
      {loading && (
        <div className={classes.loading}>
          <Spinn />
        </div>
      )}

      {/* ✅ Сообщение, если билетов нет (и загрузка завершена) */}
      {!loading && sortedTickets.length === 0 && (
        <p className={classes.noTickets}>Рейсов, подходящих под заданные фильтры, не найдено</p>
      )}

      {/* ✅ Вывод билетов */}
      {sortedTickets.slice(0, visibleCount).map((ticket) => (
        <Ticket key={ticket.id || `${ticket.price}-${Math.random()}`} ticket={ticket} />
      ))}

      {/* ✅ Кнопка "Показать ещё", если есть скрытые билеты */}
      {visibleCount < sortedTickets.length && (
        <button className={classes.moreticket} onClick={() => setVisibleCount(visibleCount + 5)}>
          Показать ещё 5 билетов
        </button>
      )}
    </div>
  )
}

export default TicketList
