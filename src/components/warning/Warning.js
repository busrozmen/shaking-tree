import React from 'react'
import './Warning.css'
import warningSize from '../../assets/size.svg'

const Warning = () => {
  return (
    <div className='info-wrapper'>
    
      <img src={warningSize} alt='' width='250' />
      <p>The screen size must be at least 1024 pixels for to work the app.</p>
    </div>
  )
}

export default Warning;