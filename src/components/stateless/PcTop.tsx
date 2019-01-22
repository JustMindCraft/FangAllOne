import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const items = [
  { key: 'editorials', active: true, name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' },
]

const PcTop = () => 
    <Menu items={items} />

export default PcTop