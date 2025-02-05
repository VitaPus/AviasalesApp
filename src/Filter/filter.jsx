import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter, toggleAllFilters } from '../reducer.js'

import classes from './filter.module.scss'

const Filter = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)

  const handleAllChange = () => {
    dispatch(toggleAllFilters())
  }

  const handleCheckboxChange = (filter) => {
    dispatch(toggleFilter(filter))
  }

  return (
    <div className={classes.filter}>
      <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={classes.checkbox}>
        <input type="checkbox" className={classes.customcheckbox} checked={filters.all} onChange={handleAllChange} />
        <span>Все</span>
      </div>
      <div className={classes.checkbox}>
        <input type="checkbox" className={classes.customcheckbox} checked={filters.direct} onChange={() => handleCheckboxChange('direct')} />
        <span>Без пересадок</span>
      </div>
      <div className={classes.checkbox}>
        <input type="checkbox" className={classes.customcheckbox} checked={filters.oneStop} onChange={() => handleCheckboxChange('oneStop')} />
        <span>1 пересадка</span>
      </div>
      <div className={classes.checkbox}>
        <input type="checkbox" className={classes.customcheckbox} checked={filters.twoStops} onChange={() => handleCheckboxChange('twoStops')} />
        <span>2 пересадки</span>
      </div>
      <div className={classes.checkbox}>
        <input type="checkbox" className={classes.customcheckbox} checked={filters.threeStops} onChange={() => handleCheckboxChange('threeStops')} />
        <span>3 пересадки</span>
      </div>
    </div>
  )
}

export default Filter
