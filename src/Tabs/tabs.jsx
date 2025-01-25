import React from 'react'
import './tabs.scss'

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="active tab">Самый дешевый</button>
      <button className="tab">Самый быстрый</button>
      <button className="tab">Оптимальный</button>
    </div>
  )
}
export default Tabs
