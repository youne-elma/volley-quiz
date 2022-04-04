import React from 'react'

import loadingGif from '../images/loadingGif.gif'
 
const Loading = () => {
  return (
    <img className="loadingGif" src={loadingGif} alt="loading gif"/>
  )
}

export default Loading