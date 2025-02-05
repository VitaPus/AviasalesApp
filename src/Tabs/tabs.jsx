import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortType } from '../reducer'
import classes from './tabs.module.scss'

const Tabs = () => {
  const dispatch = useDispatch()
  const sortType = useSelector((state) => state.filters.sortType)

  const handleSortChange = (type) => {
    dispatch(setSortType(type))
  }

  return (
    <div className={classes.tabs}>
      <button
        className={`${classes.tab} ${sortType === 'cheapest' ? classes.active : ''}`}
        onClick={() => handleSortChange('cheapest')}
      >
        Самый дешевый
      </button>
      <button
        className={`${classes.tab} ${sortType === 'fastest' ? classes.active : ''}`}
        onClick={() => handleSortChange('fastest')}
      >
        Самый быстрый
      </button>
      <button
        className={`${classes.tab} ${sortType === 'optimal' ? classes.active : ''}`}
        onClick={() => handleSortChange('optimal')}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default Tabs
