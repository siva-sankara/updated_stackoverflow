import React from 'react'
import './RightSideBar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
const RightSIdeBar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget />
        <WidgetTags />
    </aside>
  )
}

export default RightSIdeBar
