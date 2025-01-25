import React from 'react'
import classes from './tabs.module.scss'

const Tabs = () => {
  return (
    <div className={classes.tabs}>
      <button className={`${classes['active']} ${classes['tab']}`}>Самый дешевый</button>
      <button className={classes.tab}>Самый быстрый</button>
      <button className={classes.tab}>Оптимальный</button>
    </div>
  )
}
export default Tabs
