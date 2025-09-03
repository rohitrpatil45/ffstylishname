import React from 'react'
import '../src/Displaycomponent.css'

function Displayname({value}) {
  return (
    <div>
        <h2 className='naming'>{value}</h2>
    </div>
  )
}

export default Displayname