import React from 'react'
import {useLocation} from 'react-router-dom'
function Error() {
    let location =useLocation()
  return (
    <div><h1> The{location.pathname} page not founded error !</h1></div>
  )
}

export default Error